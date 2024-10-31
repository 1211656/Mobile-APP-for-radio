import vlc
import time
import asyncio

url = "https://radiolisboa.ddns.net:8443/inmr"
player = None
async def play_music():
    global player
    try:
        
        player = vlc.MediaPlayer(url)
        player.play()
        print()
        print("----------------------")
        print("Reproduzindo música...")
        print("----------------------")
        
        while True:
            state = player.get_state()
            if state in [vlc.State.Ended, vlc.State.Error]:
                break
            await asyncio.sleep(1)
    except Exception as e:
        print(f"Erro ao reproduzir o stream de áudio: {e}")


async def stop_music():
   
    global player 
    print()
    if player is not None:
        player.stop()
        print("---------------")
        print("Música parada.")
        print("---------------")
        player = None
    else:
        print("---------------------------")
        print("Nenhuma música está a tocar")
        print("---------------------------")

