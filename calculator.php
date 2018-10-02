<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
<h1>Arithmetic Calculator</h1>
<img src="kids.png" width="300" height="300" >
<table>
    <tr>
        <td align="left">Left hand side operand: </td>
        <td><input id="leftOp" type="text"/></td>
    </tr>
    <tr>
        <td align="left">Right hand side operand: </td>
        <td><input id="rightOp" type="text"/></td>
    </tr>
    <tr>
        <td align="left">Operator: </td>
        <td><select id="op">
                <option selected>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select></td>
    </tr>
    <tr>
        <td align="left">Result: </td>
        <td><input id="result" type="text"/></td>
    </tr>

    <tr>
        <td><button id="cleanBtn">Clean</button></td>
    </tr>
</table>
<div id="textDisplay"></div>
<div id="imgDisplay" display="none">
    <img src="happyMonkey.gif" id="happyMonkey" style="display:none">
    <img src="sadMonkey.gif" id="sadMonkey" style="display:none">
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script>

    function calculate(){
        var leftOp = $("#leftOp").val();
        var rightOp = $("#rightOp").val();
        var operator = $("#op").val();
        var res;
        if(operator==='+'){
            res = eval(leftOp)+eval(rightOp) ;
        }else if(operator==='-'){
            res = leftOp-rightOp ;
        }else if(operator==='*'){
            res = leftOp*rightOp ;
        }else{
            res = leftOp/rightOp ;
        }
        compare(res);
    }

    function compare(res) {
        var userRes = $("#result").val();
        if (userRes == null || userRes==""){
            return;
        }else {
            if (res == userRes) {
                var correct = $("#textDisplay");
                correct.text("CORRECT!");
                correct.css({color: "green", fontSize: "x-large"});
                addImageCorrect();

            } else {
                var wrong = $("#textDisplay");
                wrong.text("WRONG!");
                wrong.css({color: "red", fontSize: "x-large"});
                addImageIncorrect();

            }
        }
    }

    function addImageCorrect(){
        $("#sadMonkey").css("display","none");
        $("#happyMonkey").css("display","inline");
    }

    function addImageIncorrect(){
        $("#sadMonkey").css("display","inline");
        $("#happyMonkey").css("display","none");
    }

    $("input").on("input", function() {
        calculate();

    });
    $("#op").on("change", function() {
        calculate()
    });
    $("#cleanBtn").click(function(){
        $("#leftOp").val("");
        $("#rightOp").val("");
        $("#result").val("");
        $("#sadMonkey").css("display","none");
        $("#happyMonkey").css("display","none");
        $("#textDisplay").text("");

    });


</script>
</body>
</html>
