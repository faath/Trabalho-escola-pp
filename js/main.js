// Função para alugar um filme
function alugarFilme() {
    alert("Filme alugado com sucesso!");
}

// Adicionar evento de clique aos botões de aluguel
document.addEventListener("DOMContentLoaded", function() {
    var botoesAlugar = document.querySelectorAll(".filme button");
    botoesAlugar.forEach(function(botao) {
        botao.addEventListener("click", alugarFilme);
    });
});s