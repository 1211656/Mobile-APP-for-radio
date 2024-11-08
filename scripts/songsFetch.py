import vlc
import time
import asyncio

url = "https://radiolisboa.ddns.net:8443/inmr"
player = None
async def play_music():
    global player
    try:
        

        print("Tentando criar instância do VLC...")
        # Crie a instância do VLC sem a opção '--no-ssl-cert-verification'
        instance = vlc.Instance()
        if instance is None:
            raise Exception("Falha ao criar instância do VLC")

        print("Instância do VLC criada com sucesso.")

        # Crie um novo player de mídia
        player = instance.media_player_new()
        if player is None:
            raise Exception("Falha ao criar player de mídia")

        print("Player de mídia criado com sucesso.")

        # Crie uma nova mídia a partir do URL
        media = instance.media_new(url)
        if media is None:
            raise Exception("Falha ao criar mídia")
        
        player.set_media(media)
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

