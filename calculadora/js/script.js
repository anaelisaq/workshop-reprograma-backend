var inputGanhoMes = document.querySelector("#ganho-mes");
var inputHorasDia = document.querySelector("#horas-dia");
var spanHora = document.querySelector("#resposta");

function calcularValorHora() {
    var totalHoras = inputHorasDia.valueAsNumber*22;
    var valorHora = (inputGanhoMes.valueAsNumber/totalHoras).toFixed(2);
    spanHora.textContent = "R$ " + valorHora
}