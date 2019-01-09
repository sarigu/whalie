let whalie = document.querySelector("#whalie");
let heading = document.querySelector("#heading"); 

//Move Button
let moveBtn = document.querySelector("#moveBtn"); 
moveBtn.addEventListener("click", move);
function move(){
    whalie.classList.toggle("isMoving");
    heading.classList.toggle("hideHeading9");
}

//Jump Up and Down Button

let jumpBtn = document.querySelector("#jumpBtn");
jumpBtn.addEventListener("click", jumpsUpAndDown);
function jumpsUpAndDown(){
    whalie.classList.toggle("isJumping");
    heading.classList.toggle("hideHeading");
}

//Move to 30% in to the scene

let moveTo30Btn= document.querySelector("#moveTo30Btn");
moveTo30Btn.addEventListener("click", movesTo30);
function movesTo30(){
    whalie.classList.toggle("isMovingTo30"); 
    heading.classList.toggle("hideHeading");
}

//Move from 30% just slightly outside of the scene

let moveFrom30Btn = document.querySelector("#moveFrom30Btn");
moveFrom30Btn.addEventListener("click", movesFrom30); 
function movesFrom30(){
    whalie.classList.toggle("isMovingFrom30");
    heading.classList.toggle("hideHeading");
}

//One jump Button
let oneJumpBtn = document.querySelector("#oneJumpBtn");
oneJumpBtn.addEventListener("click", jump);
function jump(){
    whalie.classList.toggle("isJumpingOnce");
    heading.classList.toggle("hideHeading");
}

//Fades aways

let fadeBtn = document.querySelector("#fadeBtn");
fadeBtn.addEventListener("click", fade);
function fade(){
    whalie.classList.toggle("isFading");
    heading.classList.toggle("hideHeading9");
}

//Whalie falls

let fallBtn = document.querySelector("#fallBtn");
fallBtn.addEventListener("click", falls); 
function falls(){
    whalie.classList.toggle("isFalling"); 
    heading.classList.toggle("hideHeading");
}

//Move to 0

let moveTo0Btn = document.querySelector("#moveTo0Btn"); 
moveTo0Btn.addEventListener("click", moveTo0);
function moveTo0(){
    whalie.classList.toggle("isMovingTo0");
    heading.classList.toggle("hideHeading"); 
}

//Shake it off

let shakeBtn = document.querySelector("#shakeBtn"); 
shakeBtn.addEventListener("click", shake);
function shake(){
    whalie.classList.toggle("isShaking");
    heading.classList.toggle("hideHeading"); 
}

//Speaking of

let speakBtn = document.querySelector("#speakBtn"); 
speakBtn.addEventListener("click", speak); 
function speak(){
    whalie.classList.toggle("isSpeaking"); 
    heading.classList.toggle("hideHeading");
}