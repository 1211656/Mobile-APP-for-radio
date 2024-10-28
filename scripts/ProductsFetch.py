import requests
from requests.auth import HTTPBasicAuth


site_url = 'https://shop.ineedmusic.pt'
endpoint = '/wp-json/wp/v2/product'


consumer_key = 'ck_bfcf0d24017396e33ed37ef13e44481bb802acbe'
consumer_secret = 'cs_e94eac4a4a0748896a80a1b5dd8e937e7f7db88d'

api_url = site_url + endpoint

response = requests.get(api_url, auth=HTTPBasicAuth(consumer_key, consumer_secret))

if response.status_code == 200:
    products = response.json()
    for i in range(len(products)):
        print(f"ID: {products[i]['id']}, Nome: {products[i]['title']['rendered']}")
else:
    print(f"Erro: {response.status_code}, {response.text}")
