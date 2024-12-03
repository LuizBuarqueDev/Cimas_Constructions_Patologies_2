import os
from flask import render_template, request, redirect, send_from_directory, url_for
from app import app
from ultralytics import YOLO
import shutil

model = YOLO("best.pt")

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/download/<filename>')
def download(filename):
    return send_from_directory("",filename, as_attachment=True)

def zip_folder(folder_path,zip_path):
    shutil.make_archive(zip_path,'zip',folder_path)
    shutil.rmtree(folder_path)
    
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

def predict(path):
    result = model.predict(path,conf=0.18,classes=[1], save_conf=False)[0]

    path = path.replace('.','_predict.')
    
    result.save(path)
    result.names[1] = 'Área de Risco'
    return path.split(os.path.sep)[-1]

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
    predicted_files = []

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
                predicted_files.append(predict(filepath))
            except Exception as e:
                print(f"Erro ao salvar o arquivo {image.filename}: {e}")
                return f"Erro ao salvar o arquivo {image.filename}: {e}", 500
    
    zipFilename = "predicted"
    pathZipado = os.path.join("app",zipFilename)
    pathUpload = os.path.join("app","uploads")
    zip_folder(os.path.abspath(pathUpload),os.path.abspath(pathZipado))
    # Após o upload, renderize a página com os arquivos enviados
    return render_template('index.html', uploaded_files=uploaded_files,predicted_files=predicted_files,resource="download/"+zipFilename+".zip")
