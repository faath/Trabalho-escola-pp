// contato.js

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contatoForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que o formulário seja enviado

            // Exibe a mensagem de agradecimento
            alert("Obrigado por nos informar. Seu email foi redirecionado para nossa empresa e entraremos em contato o mais rápido possível.");
        });
    } else {
        console.error("Formulário não encontrado.");
    }
});