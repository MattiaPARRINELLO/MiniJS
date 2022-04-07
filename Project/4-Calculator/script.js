function forNumber(number) {
    var result = document.getElementById("result");
    result.value += number;
}
function forOperator(operator) {
    var result = document.getElementById("result");
    if (result.value.slice(-1) == "+" || result.value.slice(-1) == "-" || result.value.slice(-1) == "*" || result.value.slice(-1) == "/") {
        result.value = result.value.slice(0, -1) + operator;
    } else if (result.value == "" || result.value.slice(-1) == ".") { } else {
    result.value += operator;
    }
}
function forClear() {
    var result = document.getElementById("result");
    result.value = "";
}
function forEqual() {
    var result = document.getElementById("result");
    if (result.value.slice(-1) == "+" || result.value.slice(-1) == "-" || result.value.slice(-1) == "*" || result.value.slice(-1) == "/" || result.value == "" || result.value.slice(-1) == ".") {
        result.value = result.value.slice(0, -1);
    } else  {
    result.value = eval(result.value);
    }
}