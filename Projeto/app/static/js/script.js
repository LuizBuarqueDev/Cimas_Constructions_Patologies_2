document.getElementById('fileInput').addEventListener('change',function(event){
    const file = event.target[0];
    if(file && file.type.startsWith('imag/')){
        const reader =new FileRender();
        reader.onload = function(e){
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        alert('por favor, selecione um arquivo');
    } 
});