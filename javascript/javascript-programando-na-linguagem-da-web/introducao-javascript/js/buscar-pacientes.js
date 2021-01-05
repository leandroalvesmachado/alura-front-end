var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    // para requisicoes http
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;

            // imprime o tipo da variavel
            // console.log(typeof resposta);

            // json para objeto ou array de objetos
            var pacientes = JSON.parse(resposta);

            // imprime o tipo da variavel
            // console.log(typeof pacientes);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});