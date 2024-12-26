
let rn=0;

let makebubble=()=>{
    let clutter="";

for(let i=1; i<=150; i++){
    let mr=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${mr}</div>`;
}

document.querySelector(".bottom").innerHTML=clutter;
}

let timer=60;
let setTimer=()=>{
    let timeInt=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timerVal").textContent=timer;
        }else{
            clearInterval(timeInt);
            document.querySelector(".bottom").innerHTML=`<h1>Game Over <br> Your Score Is ${score}</h1>`;
            document.querySelector(".newgame").style="display: flex";
        }
    },1000);
}

let runHit=()=>{
    rn=Math.floor(Math.random()*10);
    document.querySelector(".runHit").innerHTML=rn;
}

document.querySelector(".bottom").addEventListener("click",function(dets){
    let num=Number(dets.target.textContent);
    if(num===rn){
        incScore();
        makebubble();
        runHit();
    }
});


let score=0;
let incScore=()=>{
    score+=10;
    document.querySelector(".score").innerHTML=score;
}


runHit();
setTimer();
makebubble();
