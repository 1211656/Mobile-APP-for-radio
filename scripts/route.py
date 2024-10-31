import os
import signal
import subprocess
from quart import Quart, jsonify
from songsFetch import play_music, stop_music
import asyncio
import aiohttp

app = Quart(__name__)
process = None  # Inicializa a variável global process

async def get_pid_by_port(port):
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
async def run_script():
    global process
    if process is None or process.poll() is not None:  
        try:
            
            asyncio.create_task(play_music())
            print("Started playing music")
            
            return jsonify({'message': 'Music started successfully'})
        except Exception as e:
            print(f"Error starting music: {e}")
            return jsonify({'error': str(e)})
    else:
        print("Music is already playing")
        return jsonify({'message': 'Music is already playing'})

@app.route('/stop', methods=['GET'])
async def stop_script():
    global process
    try:
        await stop_music()
        print()
        print("---------------------------")
        print("Music Stopped successfully!")
        print("---------------------------")

        print()
        return jsonify({'message': 'Music stopped successfully'})
    except Exception as e:
        print(f"Error stopping music: {e}")
        return jsonify({'error': str(e)})

@app.route('/current-song', methods=['GET'])
async def get_radio_info():
    radio_info_url = "https://ineedmusic.pt//wp-content/uploads/onair/playerINM.txt"
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(radio_info_url) as response:
                response.raise_for_status()
                radio_info = await response.text()
                radio_info = radio_info.strip()
                print(radio_info)
                return jsonify({'radio_info': radio_info})
    except aiohttp.ClientError as e:
        print(f"ClientError: {e}")
        return jsonify({'error': 'Erro ao obter informações da rádio.'}), 500
    except Exception as e:
        print(f"Exception: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5200)