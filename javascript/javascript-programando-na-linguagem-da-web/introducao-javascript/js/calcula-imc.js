// documento = variavel
// DOM = toda a pagina guardada (Document Object Model)
// console.log(document);

// querySelector = captura elemento a partir da tag passada
// console.log(document.querySelector("h1"));

// captura o conteudo da tag
// console.log(document.querySelector("h1").textContent);

// alterando conteudo da tag
// var titulo = document.querySelector("h1");
// titulo.textContent = "Teste";

// buscando pela classe
// var titulo = document.querySelector(".titulo");
// titulo.textContent = "Aparecida Nutricionista";

// calculando IMC para o primeiro elemento da tabela (primeiro paciente)
// var paciente = document.querySelector("#primeiro-paciente");

// var tdPeso = paciente.querySelector(".info-peso");
// var peso = tdPeso.textContent;

// var tdAltura = paciente.querySelector(".info-altura");
// var altura = tdAltura.textContent;

// var tdImc = paciente.querySelector(".info-imc");

// var pesoEhValido = true;
// var alturaEhValida = true;

// if (peso <= 0 || peso >= 1000) {
//     console.log('Peso inválido');
//     pesoEhValido = false;
//     tdImc.textContent = "Peso Inválido";
// }

// if (altura <= 0 || altura >= 3.00) {
//     console.log('Altura inválida');
//     alturaEhValida = false;
//     tdImc.textContent = "Altura Inválida";
// }

// if (alturaEhValida && pesoEhValido) {
//     var imc = peso / (altura*altura);
//     tdImc.textContent = imc;
// }

// buscando pela classe
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// calculando IMC para todos os pacientes da tabela (todos os elementos)
// retorna um array de elementos que tem a classe paciente
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log('Peso inválido');
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";

        // pacientes[i].style.backgroundColor = "lightcoral";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log('Altura inválida');
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        
        // pacientes[i].style.backgroundColor = "lightcoral";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }

    return false;
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    }

    return false;
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    // toFixed(2) = qtd casas decimais
    return imc.toFixed(2);
}

