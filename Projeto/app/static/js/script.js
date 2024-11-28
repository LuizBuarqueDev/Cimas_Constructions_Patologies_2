function previewImage(event) {
    const files = event.target.files;  // Obter todas as imagens selecionadas

    if (files.length > 0) {
        const popup = document.getElementById("image-popup");
        const popupImg = document.getElementById("popup-img");

        // Função para processar cada arquivo de imagem de forma assíncrona
        function processFile(index) {
            if (index >= files.length) return; // Se não há mais arquivos para processar, saímos

            const file = files[index];
            const reader = new FileReader();

            reader.onload = function(e) {
                const imgSrc = e.target.result;
                // Exibe a imagem no popup
                popupImg.src = imgSrc;
                popup.style.display = "flex";  // Exibe o popup

                // Função para confirmar o envio das imagens
                document.getElementById("confirm-btn").onclick = function() {
                    alert("Arquivos confirmados!");
                    popup.style.display = "none";  // Fecha o popup
                };

                // Função para cancelar o envio
                document.getElementById("cancel-btn").onclick = function() {
                    popup.style.display = "none";  // Fecha o popup
                };

                // Depois de processar o arquivo, chama a função recursivamente para o próximo
                processFile(index + 1);
            };

            reader.onerror = function() {
                console.error("Erro ao tentar ler o arquivo", file.name);
            };

            // Inicia a leitura do arquivo
            reader.readAsDataURL(file);
        }

        // Inicia o processo com o primeiro arquivo
        processFile(0);
    }
}
