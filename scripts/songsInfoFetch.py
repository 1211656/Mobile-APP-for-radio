
from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/current-song', methods=['GET'])
def get_current_song():
    radio_info_url = 'http://ineedmusic.pt/wp-content/uploads/onair/playerINM.txt'
    response = requests.get(radio_info_url)
    
    try:
        radio_info = response.text.strip().split(' - ')
        if len(radio_info) == 2:
            artist_name, song_name = radio_info
            return jsonify({'artist_name': artist_name, 'song_name': song_name})
        else:
            return jsonify({'error': 'Formato inesperado no arquivo de texto.'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)