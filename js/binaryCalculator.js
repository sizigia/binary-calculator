const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

const btnEql = document.getElementById('btnEql');
const btnClr = document.getElementById('btnClr');


function screenOp(e) {
    var btn = e.target || e.srcElement;
    res.innerHTML += document.getElementById(btn.id).innerHTML;
}
const printScreen = [btn0, btn1, btnSum, btnSub, btnMul, btnDiv];
printScreen.map(x => { x.addEventListener('click', screenOp); });

function clear(e) {
    res.innerHTML = '';
};

btnClr.addEventListener('click', clear);


function operate() {
    let regEx = /([0-1]+)(\+|-|\*|\/)([0-1]+)/;
    let operation = document.getElementById('res').innerHTML.match(regEx);
    let x = parseInt(operation[1], 2);
    let y = parseInt(operation[3], 2);

    if (operation[2] === "+") {
        res.innerHTML = (x + y).toString(2);
    }
    else if (operation[2] === "-") {
        res.innerHTML = (x - y).toString(2);
    }
    else if (operation[2] === "*") {
        res.innerHTML = (x * y).toString(2);
    }

    else if (operation[2] === "/") {
        res.innerHTML = (Math.floor(x / y)).toString(2);
    }

    return res.innerHTML;
};

btnEql.addEventListener('click', operate);
