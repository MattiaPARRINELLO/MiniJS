function randomNumber() { // Generate random numbers function
    let num1 = Math.floor(Math.random() * 10); // Generate random number between 0 and 9
    let num2 = Math.floor(Math.random() * 10); // Generate random number between 0 and 9

    document.getElementById("primaryNumber").innerHTML = num1; // Display the first number
    document.getElementById("secondaryNumber").innerHTML = num2; // Display the second number
}

function checkResult() { // Check the result function
    let num1 = document.getElementById("primaryNumber").innerHTML; // Get the first number
    let num2 = document.getElementById("secondaryNumber").innerHTML; // Get the second number
    let result = document.getElementById("guess").value; // Get the result
    let answer = eval(num1 + "+" + num2); // Calculate the answer

    if (answer == result) { // If the answer is correct
        document.getElementById("guess").style.backgroundColor = "green"; // Change the background color to green

        setTimeout(() => { // After 1 second
            document.getElementById("guess").value = ""; // Clear the input
            document.getElementById("guess").style.backgroundColor = "white"; // Change the background color to white

            randomNumber(); // Generate new numbers
        }, 1000); // End after 1 second
    } else { // If the answer is incorrect
        document.getElementById("guess").style.backgroundColor = "red"; // Change the background color to red

        setTimeout(() => { // After 1 second
            document.getElementById("guess").value = ""; // Clear the input
            document.getElementById("guess").style.backgroundColor = "white"; // Change the background color to white

            randomNumber(); // Generate new numbers
        }, 1000); // End after 1 second
    }
}