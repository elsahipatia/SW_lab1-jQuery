function loadImages() {
    document.getElementById("happyMonkey").style.display="none";
    document.getElementById("sadMonkey").style.display="none";
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

