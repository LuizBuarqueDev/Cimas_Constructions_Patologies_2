import os
from flask import render_template, request, redirect, url_for
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_images():
    if 'images' not in request.files:
        print("Nenhum arquivo enviado.")
        return 'Nenhum arquivo enviado', 400

    images = request.files.getlist('images')

    if len(images) == 0:
        print("Nenhum arquivo selecionado.")
        return 'Nenhum arquivo selecionado', 400

    uploaded_files = []  # Lista para armazenar os nomes dos arquivos enviados

    for image in images:
        if image.filename != '':
            filename = os.path.basename(image.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)

            if not os.path.exists(app.config['UPLOAD_FOLDER']):
                os.makedirs(app.config['UPLOAD_FOLDER'])

            try:
                image.save(filepath)
                uploaded_files.append(filename)  # Armazena o nome do arquivo
                print(f"Arquivo salvo com sucesso: {filepath}")
            except Exception as e:
                print(f"Erro ao salvar o arquivo {image.filename}: {e}")
                return f"Erro ao salvar o arquivo {image.filename}: {e}", 500

    # Após o upload, renderize a página com os arquivos enviados
    return render_template('index.html', uploaded_files=uploaded_files)
