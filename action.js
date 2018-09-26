
function calculate() {
    var leftOp = document.getElementById('leftOp').value;
    var rightOp = document.getElementById('rightOp').value;
    var operator = document.getElementById('op').value;
    var res;
    if(operator=='+'){
        res = eval(leftOp)+eval(rightOp) ;
    }else if(operator=='-'){
        res = leftOp-rightOp ;
    }else if(operator=='*'){
        res = leftOp*rightOp ;
    }else{
        res = leftOp/rightOp ;
    }
    compare(res);
}



function compare(res) {
    var userRes = document.getElementById('result').value;
    if (userRes == null || userRes==""){
        return;
    }else {
        if (res == userRes) {
            document.getElementById('display').innerText = "¡CORRECTO!";

        } else {
            document.getElementById('display').innerText = "¡INCORRECTO!";
        }
    }
}


