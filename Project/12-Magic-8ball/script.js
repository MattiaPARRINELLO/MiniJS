document.getElementById("button").addEventListener("click", function(){ 
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    if (randomNumber == 1 || randomNumber == 2 || randomNumber == 3 || randomNumber == 4 || randomNumber == 5 || randomNumber == 6) {
        document.getElementById("answer").innerHTML = "It is certain";
    } else if (randomNumber == 7) {
        document.getElementById("answer").innerHTML = "It is decidedly so";
    }
    else if (randomNumber == 8) {
        document.getElementById("answer").innerHTML = "Reply hazy try again";
    }
    else if (randomNumber == 9) {
        document.getElementById("answer").innerHTML = "Cannot predict now";
    }
    else if (randomNumber == 10) {
        document.getElementById("answer").innerHTML = "Don't count on it";
    }
    else if (randomNumber == 11) {
        document.getElementById("answer").innerHTML = "My sources say no";
    }
    else if (randomNumber == 12) {
        document.getElementById("answer").innerHTML = "Outlook not so good";
    }
});