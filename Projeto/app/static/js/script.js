function previewImage(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgSrc = e.target.result;

            // Mostrar o popup com a imagem
            const popup = document.getElementById("image-popup");
            const popupImg = document.getElementById("popup-img");
            popupImg.src = imgSrc;

            popup.style.display = "flex"; // Exibe o popup

            // Definir o comportamento dos botões
            document.getElementById("confirm-btn").onclick = function() {
                alert("Arquivo confirmado!");
                popup.style.display = "none"; // Fecha o popup após confirmação
            };

            document.getElementById("cancel-btn").onclick = function() {
                popup.style.display = "none"; // Fecha o popup após cancelamento
            };
        };

        reader.readAsDataURL(file);
    } else {
        alert("Por favor, selecione uma imagem válida.");
    }
}
