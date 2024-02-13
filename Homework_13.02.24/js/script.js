// alert("Hello world !!!");

function subtract(){
    let input1 = document.querySelector(".input-1").value;
    let input2 = document.querySelector(".input-2").value;

    let result = input1 - input2;

    document.querySelector(".result-1").innerText = input1 + " - " + input2 + " = " + result;
}

function multiply(){
    let input1 = document.querySelector(".input-3").value;
    let input2 = document.querySelector(".input-4").value;

    let result = input1 * input2;

    document.querySelector(".result-2").innerText = input1 + " * " + input2 + " = " + result;
}

function divide(){
    let input1 = document.querySelector(".input-5").value;
    let input2 = document.querySelector(".input-6").value;

    let result = input1 / input2;

    document.querySelector(".result-3").innerText = input1 + " / " + input2 + " = " + result;
}

let minutesInHour = 60;

function getMinutes(){
    let inputValue = document.querySelector(".input-7").value;
    let result = inputValue * minutesInHour;

    document.querySelector(".result-4").innerText = inputValue + ' Hour = ' + result + ' Minutes';
}


function calculateAverage(){
    let input1 = +document.querySelector(".input-8").value;
    let input2 = +document.querySelector(".input-9").value;
    let input3 = +document.querySelector(".input-10").value;

    let sum = input1 + input2 + input3;

    let result = sum / 3;

    document.querySelector(".result-5").innerText =
     input1 + " + " + input2 + " + " + input3 + ' = ' + sum + ' / ' + ' 3 ' + ' = ' + result;
}