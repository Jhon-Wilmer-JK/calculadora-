//declarando variables
var operandoa;
var operandob;
var operacion;
function init() {
    // parametros
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var division = document.getElementById("division");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multiplicacion = document.getElementById("multiplicacion");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var cero = document.getElementById("cero");
    var suma = document.getElementById("suma");
    var resetea = document.getElementById("resetea");
    var elimina = document.getElementById("elimina");
    var modoDN = document.getElementById("modoDN");
}
//eventos clik
modoDN.onclick=function(e){
}
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
//operadores
suma.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
}
resetea.onclick = function (e) {
    resetear();
}
elimina.onclick = function (e) {
    eliminar();
}
function limpiar() {
    resultado.textContent = "";
}
function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseInt(operandoa) + parseInt(operandob);
            break;
        case "-":
            res = parseInt(operandoa) - parseInt(operandob);
            break;
        case "*":
            res = parseInt(operandoa) * parseInt(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}
function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function eliminar() {
    var resultado = document.getElementById("resultado");
    var nuevoContenido = resultado.textContent.slice(0, -1);
    resultado.textContent = nuevoContenido;
}
