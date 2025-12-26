let heading = document.getElementById("heading");
     let input = document.getElementById("input");
     let btn = document.getElementById("btn");
     let max = 10;
     let min = 1;
     let random = Math.floor(Math.random() * (max - min + 1) + min);
     let count = 0;
     let guesses = document.getElementById("guesses");
     let remainigGuess = document.getElementById("remainigGuess");
     let displayGuess = document.getElementById("displayGuess");
     let restartBtn = document.getElementById("restart");
     let restartScreen = document.getElementById("restartScreen");
     
     heading.textContent = `Enter the number between ${min} and ${max}`;
     btn.addEventListener("click", function(){
        let guess = Number(input.value);
         if(guess === random){
             heading.textContent = "You won the game";
             btn.disabled = true;
         }
         else if(guess > random){
             heading.textContent = "You entered a higher number";
         }
         else if(guess < random){
             heading.textContent = "You entered a lower number";
         }
         count++;
         if (count >= 5){
            heading.textContent = "You lost the game";
            btn.disabled = true;
            restartScreen.classList.add('active');
         }
         remainigGuess.textContent = `You have ${5 - count} chances remaining`;
        const li = document.createElement("li");
         li.textContent = `You guessed ${guess}`;
         displayGuess.appendChild(li);
        input.value = '';
        input.focus(); 
     });
     restartBtn.addEventListener("click", function(){
        location.reload();
        });
