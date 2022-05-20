var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProj = document.querySelector("#horas-projeto");
var spanValorProj = document.querySelector("#resposta");

function calcular() {
    var totalProj = (inputValorHora.valueAsNumber*inputHorasProj.valueAsNumber).toFixed(2);
       spanValorProj.textContent = "R$ " + totalProj
}