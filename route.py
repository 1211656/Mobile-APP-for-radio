from flask import Flask, jsonify
import subprocess
import os
import signal

app = Flask(__name__)
process = None  # Inicializa a variável global process

@app.route('/play', methods=['GET'])
def run_script():
    global process
    if process is None or process.poll() is not None:  # Verifica se o processo não está em execução
        try:
            script_path = os.path.join(os.path.dirname(__file__), 'songsFetch.py')
            if not os.path.isfile(script_path):
                print(f"Script not found at path: {script_path}")  # Log de erro
                return jsonify({'error': 'Script not found'})
            
            process = subprocess.Popen(['python3', script_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            print(f"Started script with PID: {process.pid}")  # Log de depuração
            
            # Captura e imprime a saída do processo
            stdout, stderr = process.communicate()
            print(f"Script output: {stdout}")
            if stderr:
                print(f"Script error output: {stderr}")
            
            return jsonify({'message': 'Script started successfully', 'output': stdout})
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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5100)