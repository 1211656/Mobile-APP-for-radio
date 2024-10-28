import pytest
import os
import signal
import subprocess
from flask import Flask, jsonify
import sys

# Adicione o diretório 'src' ao sys.path
# Adicione o diretório 'scripts' ao sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../scripts')))

from route import app, process  # Agora você pode importar o app e a variável process do módulo route

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_start_script(client, monkeypatch):
    script_path = os.path.join(os.path.dirname(__file__), '../scripts/route.py')
    
    # Mock os.path.isfile para retornar True
    monkeypatch.setattr(os.path, 'isfile', lambda x: True)
    
    # Mock subprocess.Popen para simular o início do script
    mock_process = subprocess.Popen(['echo', 'mock'])
    mock_process.pid = 12345
    monkeypatch.setattr(subprocess, 'Popen', lambda *args, **kwargs: mock_process)
    
    response = client.get('/stop')
    assert response.status_code == 200
    assert response.json == {'message': 'Script started successfully', 'pid': 12345}