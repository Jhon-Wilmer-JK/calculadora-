function addNumber(number) {
    document.getElementById("result").value += number;
}

function addDecimal() {
    if (document.getElementById("result").value.indexOf(".") == -1) {
        document.getElementById("result").value += ".";
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}