<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Arithmetic Calculator</title>
</head>
<body>
<h1>Arithmetic Calculator</h1>
<table>
    <tr>
        <td align="left">Left hand side operand: </td>
        <td><input id="leftOp" type="text" oninput="calculate()"/></td>
    </tr>
    <tr>
        <td align="left">Right hand side operand: </td>
        <td><input id="rightOp" type="text" oninput="calculate()"/></td>
    </tr>
    <tr>
        <td align="left">Operator: </td>
        <td><select id="op" onchange="calculate()">
                <option selected>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select></td>
    </tr>
    <tr>
        <td align="left">Result: </td>
        <td><input id="result" type="text" oninput="calculate()"/><td/>
    </tr>

    <tr>
        <td><button id="cleanBtn" onclick="clean()">Clean</button></td>
    </tr>
</table>
<div id="display"></div>
</body>
<script type="text/javascript" src="action.js"></script>
</html>