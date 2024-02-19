function getExamResult(){
    let score = 0; 
    let resultText;

    let num1 = Number(document.querySelector(".exam-1").value);
    let num2 = Number(document.querySelector(".exam-2").value);
    let num3 = Number(document.querySelector(".exam-3").value);
    let num4 = Number(document.querySelector(".exam-4").value);
    let num5 = Number(document.querySelector(".exam-5").value);
    let num6 = Number(document.querySelector(".exam-6").value);
    let num7 = Number(document.querySelector(".exam-7").value);
    let num8 = Number(document.querySelector(".exam-8").value);
    let num9 = Number(document.querySelector(".exam-9").value);
    let num10 = Number(document.querySelector(".exam-10").value);


    if(num1 === 15){
        score = score + 2; // 0 + 2 = 2

        document.querySelector(".exam-1").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-1").style.border = "1px solid red";
    }

    if(num2 === 10){
        score = score + 2; // 2 + 2 = 4

        document.querySelector(".exam-2").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-2").style.border = "1px solid red";
    }

    if(num3 === 12){
        score = score + 2;
        document.querySelector(".exam-3").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-3").style.border = "1px solid red";
    }

    if(num4 === 36){
        score = score + 2;
        document.querySelector(".exam-4").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-4").style.border = "1px solid red";
    }

    if(num5 === 1){
        score = score + 2;
        document.querySelector(".exam-5").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-5").style.border = "1px solid red";
    }

    if(num6 === 3){
        score = score + 2;
        document.querySelector(".exam-6").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-6").style.border = "1px solid red";
    }

    if(num7 === 5){
        score = score + 2;
        document.querySelector(".exam-7").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-7").style.border = "1px solid red";
    }

    if(num8 === 16){
        score = score + 2;
        document.querySelector(".exam-8").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-8").style.border = "1px solid red";
    }

    if(num9 === 8){
        score = score + 2;
        document.querySelector(".exam-9").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-9").style.border = "1px solid red";
    }

    if(num10 === 3){
        score = score + 2;
        document.querySelector(".exam-10").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-10").style.border = "1px solid red";
    }

    if (score >= 18) {
        resultText = "Вы получили " + score + ", отлично";
    } else if (score >= 12) {
        resultText = "Вы получили " + score + ", хорошо";
    } else if (score >= 8) {
        resultText = "Вы получили " + score + ", удовлетворительно";
    } else {
        resultText = "Вы получили " + score + ", неудовлетворительно";
    }
    document.querySelector(".result-1").innerText = resultText;
} 

function checkEquality(){
    let num1 = Number(document.querySelector(".input-1").value);
    let num2 = Number(document.querySelector(".input-2").value);
    let num3 = Number(document.querySelector(".input-3").value);
    let result;

    if (num1 === num2 && num2 === num3) {
        result = "Все поля равны";
    } else {
        result = "Не все поля равны";
    }
    document.querySelector(".result-2").innerText = result;
}

function hasZero(){
    let num1 = Number(document.querySelector(".input-1").value);
    let num2 = Number(document.querySelector(".input-2").value);
    let num3 = Number(document.querySelector(".input-3").value);
    let result;

    if (num1 === 0 || num2 === 0 || num3 === 0) {
        result = "Да, есть";
    } else {
        result = "Нет";
    }
    document.querySelector(".result-2").innerText = result;
}

function sameOne(){
    let num1 = Number(document.querySelector(".input-1").value);
    let num2 = Number(document.querySelector(".input-2").value);
    let num3 = Number(document.querySelector(".input-3").value);
    let result;

    if (num1 === 0 || num2 === 0 || num3 === 0) {
        result = "Да, есть";
    } else {
        result = "Нет";
    }
    document.querySelector(".result-2").innerText = result;
}

function sortNumbers(){
    let num1 = Number(document.querySelector(".input-1").value);
    let num2 = Number(document.querySelector(".input-2").value);
    let num3 = Number(document.querySelector(".input-3").value);
    let result;

    let sortedArray = [num1, num2, num3].sort((a, b) => a - b);
    result = sortedArray.join(" ");
    
    document.querySelector(".result-2").innerText = result;
}