function rollDice() {
    var diceNum = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

    var diceImage = document.getElementById('diceImage');
    diceImage.style.transform = 'rotateY(360deg)'; // Add a rotation effect (optional)
    
    setTimeout(function() {
        diceImage.src = 'dice' + diceNum + '.png'; // Update the src attribute of the image
        diceImage.alt = 'Dice ' + diceNum; // Update the alt attribute for accessibility
        diceImage.style.transform = 'rotateY(0deg)'; // Reset the rotation after image change
    }, 300); // Adjust timing to match transition duration
}
JavaS