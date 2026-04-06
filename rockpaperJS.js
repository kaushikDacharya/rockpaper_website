let playerhand = null;
document.querySelector(".rock").addEventListener("click",function (){
    playerhand="rock";
    computer_hand();
    senddata();
});
document.querySelector(".paper").addEventListener("click",function (){
    playerhand = "paper";
    computer_hand();
    senddata();
});
document.querySelector(".scissor").addEventListener("click",function () {
    playerhand="scissor";
    computer_hand();
    senddata();
});
document.querySelector(".reset").addEventListener("click", function (){
    score = 0;
    localStorage.setItem("score", 0);
    document.querySelector(".score").innerHTML = "Score: 0";
});
let computerhand=null;
let score=0;

function computer_hand(){
let temp=Math.random();
if(0<temp && temp<1/3) computerhand='rock';
if(1/3<temp && temp<2/3) computerhand='paper';
if(2/3<temp && temp<1) computerhand='scissor';
}

window.onload = function (){
    score=parseInt(localStorage.getItem("score")) || 0;
    document.querySelector(".score").innerHTML = `Score: ${score}`;
}


async function senddata(){
    try{
const response = await fetch("http://127.0.0.1:5000/compute",{
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({playerhand,computerhand})
});
    const data = await response.json();
    runer(data);
    stats();
    }catch(error){
            console.error("An error has occured: ", error.message);
    }
}

function runer(data){
    if(data.result==="win"){
        score+=1;
        localStorage.setItem("score",JSON.stringify(score));
        document.querySelector(".score").innerHTML=`You win, SCORE : ${score}`;
    }
    else if(data.result==="lose"){
        score-=1;
        localStorage.setItem("score",JSON.stringify(score));
        document.querySelector(".score").innerHTML=`You lose, SCORE : ${score}`;
    }
    else{
        localStorage.setItem("score",JSON.stringify(score));
        document.querySelector(".score").innerHTML=`Draw, SCORE : ${score}`;
    }
}

function stats(){
    document.querySelector(".stats").innerHTML=`You played ${playerhand} || Engine played ${computerhand}`;
}
