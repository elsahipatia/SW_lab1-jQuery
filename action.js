function loadImages() {
    document.getElementById("happyMonkey").style.display="none";
    document.getElementById("sadMonkey").style.display="none";
}



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
            var correct = document.getElementById('display')
            correct.innerText = "CORRECT!";
            correct.style.color ="#3dc919"
            correct.style.fontSize="xx-large";
            addImageCorrect();

        } else {
            var wrong = document.getElementById('display')
            wrong.innerText = "WRONG!";
            wrong.style.color = "#F00";
            wrong.style.fontSize="xx-large";
            addImageIncorrect();
        }
    }
}

function clean(){
    document.getElementById('leftOp').value='';
    document.getElementById('rightOp').value='';
    document.getElementById('result').value='';
    var sadImg = document.getElementById("sadMonkey");
    var happyImg = document.getElementById("happyMonkey");
    var r = document.getElementById('display');
    if (happyImg.style.display != "none")
        happyImg.style.display = "none";
    if (sadImg.style.display != "none"){
        sadImg.style.display ="none";
    }
    r.innerText="";

}

function addImageCorrect(){
    var sadImg = document.getElementById("sadMonkey");
    var happyImg = document.getElementById("happyMonkey");
    if (sadImg.style.display != "none"){
        sadImg.style.display = "none";
    }
    happyImg.style.display = "inline";
}

function addImageIncorrect(){
    var sadImg = document.getElementById("sadMonkey");
    var happyImg = document.getElementById("happyMonkey");
    if (happyImg.style.display != "none"){
        happyImg.style.display = "none";
    }
    sadImg.style.display = "inline";
}
