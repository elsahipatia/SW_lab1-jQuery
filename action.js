
function clicked() {
    var leftOp = document.getElementById('leftOp').value;
    var rightOp = document.getElementById('rightOp').value;
    var operator = document.getElementById('op').value;
    if(operator=='+'){
        document.getElementById('display').innerHTML = leftOp+rightOp ;
    }else if(operator=='-'){
        document.getElementById('display').innerHTML = leftOp-rightOp ;
    }else if(operator=='*'){
        document.getElementById('display').innerHTML = leftOp*rightOp ;
    }else{
        document.getElementById('display').innerHTML = leftOp/rightOp ;
    }
}

document.getElementById('btn').addEventListener('click', clicked);;