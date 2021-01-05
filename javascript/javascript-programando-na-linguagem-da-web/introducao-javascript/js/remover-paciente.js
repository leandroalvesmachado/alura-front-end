var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         this.remove();
//     });
// });

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    // event.target me informa qual o filho clicado na tabela
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove();

    // tudo em uma linha
    // deletando com efeito fadeOut e delay para ver a animacao
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
    
});
