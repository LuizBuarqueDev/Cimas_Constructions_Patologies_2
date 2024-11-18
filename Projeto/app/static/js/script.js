function previewImage(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgSrc = e.target.result;

            const popup = document.getElementById("image-popup");
            const popupImg = document.getElementById("popup-img");
            popupImg.src = imgSrc;

            popup.style.display = "flex"; 

 
            document.getElementById("confirm-btn").onclick = function() {
                alert("Arquivo confirmado!");
                popup.style.display = "none"; 
            };

            document.getElementById("cancel-btn").onclick = function() {
                popup.style.display = "none"; 
            };
        };

        reader.readAsDataURL(file);
    } else {
        alert("Por favor, selecione uma imagem válida.");
    }
}
