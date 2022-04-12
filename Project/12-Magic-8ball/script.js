document.getElementById("button").addEventListener("click", function() {//when the button is clicked 
    var randomNumber = Math.floor(Math.random() * 12) + 1; //get a random number between 1 and 12

    if (randomNumber == 1 || randomNumber == 2 || randomNumber == 3 || randomNumber == 4 || randomNumber == 5 || randomNumber == 6) { //if the random number is between 1 and 6
        document.getElementById("answer").innerHTML = "It is certain"; //display the answer
    } else 
    if (randomNumber == 7) { //if the random number is 7
        document.getElementById("answer").innerHTML = "It is decidedly so"; //display the answer
    }
    else 
    if (randomNumber == 8) { //if the random number is 8
        document.getElementById("answer").innerHTML = "Reply hazy try again"; //display the answer
    } 
    else 
    if (randomNumber == 9) { //if the random number is 9
        document.getElementById("answer").innerHTML = "Cannot predict now"; //display the answer
    }
    else 
    if (randomNumber == 10) { //if the random number is 10
        document.getElementById("answer").innerHTML = "Don't count on it"; //display the answer
    }
    else 
    if (randomNumber == 11) { //if the random number is 11
        document.getElementById("answer").innerHTML = "My sources say no"; //display the answer
    } 
    else 
    if (randomNumber == 12) { //if the random number is 12
        document.getElementById("answer").innerHTML = "Outlook not so good"; //display the answer
    }
});