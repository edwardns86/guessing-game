let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber)
let guessHistory = [];
let count = 8
let prompt = document.getElementById("prompt");
let previousGuesses = document.getElementById("previousGuesses");
document.getElementById("remainingGuesses").innerHTML = count

function guess() {
    count --;
    document.getElementById("remainingGuesses").innerHTML = count ;
    if (count === 0) {
        prompt.innerHTML= "You have run out guesses!" ; 
        return ;
    } 
    
    let guessNumber = document.getElementById("guessField").value;
    document.getElementById("guessField").value ="" ; 
    guessNumber = parseInt(guessNumber)
    

    if (guessHistory.includes(guessNumber)) {
        prompt.innerHTML= "You Already Guessed That! You Just Wasted A Guess You only Have " + count + " Guesses Left!"
        return ;
    }
    
    guessHistory.push(guessNumber);

    if (guessNumber === randomNumber) {
        
        prompt.innerHTML= "You Got It Right";
    } else if (guessNumber > randomNumber) {
        
        prompt.innerHTML="You Guessed Too High!";
    } else if (guessNumber < randomNumber) {
        
        prompt.innerHTML ="You Guessed Too Low!";
    } else {
        
        prompt.innerHTML ="Are You Sure You Guessed A Number?";
    }
    previousGuesses.innerHTML=guessHistory ;
    console.log(guessHistory) ;
}


function refreshGame() {  
    window.location.reload();
}

// This function toggles whether a div displays on not
function showFeedback() {
    var showDiv = document.getElementById("prompt");
    if (showDiv.style.display === "none") {
      showDiv.style.display = "block";
    } else {
      showDiv.style.display = "none";
    }
  }

// This is how to add seconds 

let time = 30 ; //Starts timer
let mytime ;

function setTime() {
    time -= 1;
    document.getElementById("time").innerHTML = time ;

    if (time == 0) {

        stopTimer();
        prompt.innerHTML ="Time is up!";
    } 
}

function timeCounting() {
    myTime = setInterval(setTime, 1000); //functin to fire, milliseconds
}

function stopTimer() {
    clearInterval(myTime); // function to stop time   --> give the timer an id to stop
}

timeCounting()

