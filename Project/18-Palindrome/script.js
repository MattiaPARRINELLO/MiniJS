const result = document.getElementById('output'); //output element

function checkPalindrome() { //function to check if the string is a palindrome
    var result = document.getElementById('output'); //output element
    var input = document.getElementById('input').value //input element

    var clearInput = input.toLowerCase().replace(/[^A-Z0-9]/gi, "") //removes all non-alphanumeric characters
    reverseInput = clearInput.split("").reverse().join(""); //reverses the input

    if (clearInput === reverseInput) { //checks if the input is a palindrome
        result.innerHTML = input + ' is a palindrome.' //prints the result to the output element
        document.getElementById('input').value = "" //clears the input element

        setTimeout(() => { //sets a timeout to clear the output element
            result.innerHTML = "" //clears the output element
        }, 3000); //after 3 seconds 

    } else { //if the input is not a palindrome
        result.innerHTML = input + ' is not a palindrome.' //prints the result to the output element 
        document.getElementById('input').value = "" //clears the input element

        setTimeout(() => { //sets a timeout to clear the output element
            result.innerHTML = "" //clears the output element
        }, 3000); //after 3 seconds
    }
}