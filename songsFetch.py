import vlc
import time


url = "https://radiolisboa.ddns.net:8443/inmr"

try:
    
    player = vlc.MediaPlayer(url)
    player.play()
    print("Reproduzindo música...")
    
    while True:
        state = player.get_state()
        if state in [vlc.State.Ended, vlc.State.Error]:
            break
        time.sleep(1)
except Exception as e:
    print(f"Erro ao reproduzir o stream de áudio: {e}")

