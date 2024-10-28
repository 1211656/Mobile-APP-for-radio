import os
import signal
import subprocess
from flask import Flask, jsonify

app = Flask(__name__)
process = None  # Inicializa a variável global process

def get_pid_by_port(port):
    try:
        result = subprocess.run(['lsof', '-i', f':{port}'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        lines = result.stdout.splitlines()
        if len(lines) > 1:
            pid = int(lines[1].split()[1])
            return pid
    except Exception as e:
        print(f"Error getting PID by port: {e}")
    return None

@app.route('/play', methods=['GET'])
def run_script():
    global process
    if process is None or process.poll() is not None:  # Verifica se o processo não está em execução
        try:
            # Verifica se há um processo em execução na porta 5200 e encerra-o
            pid = get_pid_by_port(5200)
            if pid and pid != os.getpid():  # Evita matar o próprio servidor Flask
                print(f"Stopping existing process with PID: {pid}")
                os.kill(pid, signal.SIGTERM)
            
            script_path = os.path.join(os.path.dirname(__file__), 'songsFetch.py')
            if not os.path.isfile(script_path):
                print(f"Script not found at path: {script_path}")  # Log de erro
                return jsonify({'error': 'Script not found'})
            
            process = subprocess.Popen(['python3', script_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            print(f"Started script with PID: {process.pid}")  # Log de depuração
            
            return jsonify({'message': 'Script started successfully', 'pid': process.pid})
        except Exception as e:
            print(f"Error starting script: {e}")  # Log de erro
            return jsonify({'error': str(e)})
    else:
        print("Script is already running")  # Log de estado
        return jsonify({'message': 'Script is already running'})

@app.route('/stop', methods=['GET'])
def stop_script():
    global process
    if process is not None and process.poll() is None:  # Verifica se o processo está em execução
        try:
            print(f"Stopping script with PID: {process.pid}")  # Log de depuração
            os.kill(process.pid, signal.SIGTERM)  # Envia SIGTERM para o processo
            process.wait()  # Aguarda o término do processo
            process = None  # Reseta a variável process
            return jsonify({'message': 'Script stopped successfully'})
        except Exception as e:
            print(f"Error stopping script: {e}")  # Log de erro
            return jsonify({'error': str(e)})
    else:
        print("No script is running")  # Log de estado
        return jsonify({'message': 'No script is running'})     

@app.route('/current-song', methods=['GET'])
async def get_current_song():
    radio_info_url = 'http://ineedmusic.pt/wp-content/uploads/onair/playerINM.txt'
    
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(radio_info_url) as response:
                response.raise_for_status()  # Verifica se a solicitação foi bem-sucedida
                radio_info = await response.text()
                radio_info = radio_info.strip()
                return jsonify({'radio_info': radio_info})
    except aiohttp.ClientError as e:
        return jsonify({'error': 'Erro ao obter informações da rádio.'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5200)