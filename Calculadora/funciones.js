function setResult(value) {
    document.getElementById('resultado').innerHTML = value;
}

function getResult() {
    return(document.getElementById('resultado').innerHTML);
}

function agregar(val) { 
    var result = getResult();
    if (result!='0') setResult(result + val);
    else setResult(val);
}

function calcular() {
    var result = eval(getResult()); 
    setResult(result);
}

function del() { 
    setResult(0);
}