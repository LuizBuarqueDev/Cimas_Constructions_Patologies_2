function previewImages(event) {
    const files = event.target.files;
    
    // Limpar as imagens anteriores no popup
    const popupContainer = document.getElementById("popup-container");
    popupContainer.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const imgSrc = e.target.result;

                const imgElement = document.createElement("img");
                imgElement.src = imgSrc;
                imgElement.style.maxWidth = "300px";
                imgElement.style.margin = "10px";
                imgElement.style.border = "2px solid white";
                imgElement.style.cursor = "pointer";  // Para indicar que é interativo

                // Adicionar a imagem ao contêiner do popup
                popupContainer.appendChild(imgElement);
            };

            reader.readAsDataURL(file);
        } else {
            alert("Por favor, selecione apenas imagens.");
            return;
        }
    }

    // Exibir o popup
    const popup = document.getElementById("image-popup");
    popup.style.display = "flex";

    // Configuração dos botões de confirmação e cancelamento
    document.getElementById("confirm-btn").onclick = function() {
        alert("Arquivos confirmados!");
        popup.style.display = "none";
    };

    document.getElementById("cancel-btn").onclick = function() {
        popup.style.display = "none";
    };
}
