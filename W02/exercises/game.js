const modal = document.getElementById("myModal");

const btn = document.getElementById("start_game");

let closing = document.getElementsByClassName("close")[0];

btn.onclick=function(){
    modal.style.display = "block";
}

closing.onclick=function(){
    modal.style.display = "none";
}

document.getElementById('current_score').setAttribute("style","color:#28B487;font-weight:bold;");

const quiz = [
    ["1.The regulation team consists of 11 players for each team on the field","1"],
    ["2.The goalkeeper is the only player that can use their hands anywhere on the field","2"],
    ["3.The main purpose of the goalkeeper is to try to block the shots by the opposing team","1"]
]

let score = 0;
let counter = 0;

document.getElementById("question_area").innerHTML =quiz[counter][0];




next_question.onclick=function(){
    debugger
    
    const choices = document.querySelectorAll('input[name="soccer_option"]');
    let selectedVal;
    for (const choice of choices){
        if(choice.checked){
            selectedVal = choice.value;
            break;
        }
    
    }
    if (selectedVal === quiz[counter][1]){
        score++;
        
    }
    counter++;
    document.getElementById("current_score").innerHTML = score;
    if(counter < quiz.length){
    document.getElementById("question_area").innerHTML =quiz[counter][0];
    }
    else {
        document.getElementById("question_area").innerHTML = "Game Over";
        document.getElementById("next_question").style.display = "none";
        document.getElementById("options").style.display = "none";
    }
}