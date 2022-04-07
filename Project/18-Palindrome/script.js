const result = document.getElementById('output');
function checkPalindrome() {
    var result = document.getElementById('output');
    var input = document.getElementById('input').value
    var clearInput = input.toLowerCase().replace(/[^A-Z0-9]/gi, "")
    console.log(input)
    reverseInput = clearInput.split("").reverse().join("");
    if (clearInput === reverseInput) {
        result.innerHTML = input + ' is a palindrome.'
        document.getElementById('input').value = ""
        setTimeout(() => {
            result.innerHTML = ""
        }, 3000);
    } else {
        result.innerHTML = input + ' is not a palindrome.'
        document.getElementById('input').value = ""
        setTimeout(() => {
            result.innerHTML = ""
        }, 3000);
    }
    }