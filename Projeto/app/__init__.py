from flask import Flask
import os

# Inicializa o app Flask
app = Flask(__name__)

# Configurações de upload
UPLOAD_FOLDER = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 1000 * 1024 * 1024  # Limite de 16MB para uploads

# Verifica se a pasta 'uploads' existe, caso contrário, cria a pasta
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Importa as rotas do arquivo routes.py
from app import routes
