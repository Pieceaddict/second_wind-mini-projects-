let userscore =0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const comscorepara = document.querySelector("#comscore");
// game working
const generatecomchoice = ()=>{
    const option = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
    // math.random() to generate random number
    // math.floor to remove decimal values in number
    // rock,paper scissor random generator
};

//   winner print
const showwinner = (userwin,userchoice,comChoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
    console.log("You Win!")
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        comscorepara.innerText = computerscore;
        console.log("You Lose!");
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red";
    }
}
const drawgame = () =>{
    console.log("game was a draw.");
    msg.innerText = "Game was a draw, Play again!";
    msg.style.backgroundColor ="black"
    msg.style.color = "white";
}


// game logic
const playgame = (userchoice) =>{
console.log("user choice=", userchoice);
const comChoice = generatecomchoice();
console.log("computer choice=",comChoice);
// .general computer choice => modular
// game logic
if(userchoice===comChoice){
    // draw game 
    drawgame();
}
else{
    let userwin = true;
    if(userchoice==="rock"){
        userwin = comChoice === "paper" ? false : true;
    }
    else if(userchoice==="paper"){
        userwin = comChoice === "scissors" ? false : true;
    }
    else{
        userwin = comChoice === "rock" ? false : true;
    }
    showwinner(userwin);
}
};

// start
// print 
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
          console.log("choice was made", userchoice);
          playgame(userchoice);
    })
});