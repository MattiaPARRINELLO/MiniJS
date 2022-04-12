const url = new URLSearchParams(window.location.search); //get url parameters
const type = url.get("type"); //get type parameter of the url
let exist = url.has("type"); //check if the type parameter exist
const texts = { //texts of the website
    a: ["Change background color", "This project consists in recovering the color (HEX or name) and to change the background color in concequance", "../../Project/1-Change-background-color", "../../screenshots/1.png"],
    b: ["Random Quotes generator", "This project consists in recuperating in an \"array\" of quotations and to post them randomly", "../../Project/2-Random-quotes", "../../screenshots/2.png"],
    c: ["Counter Project", "This project consists in displaying a counter that depending on whether you click on + or - will increase or decrease the number and display it", "../../Project/3-Counter-project", "../../screenshots/3.png"],
    d: ["Calculator", "This project consists in making a calculator (numbers, +, -, /, *, =, C)", "../../Project/4-Calculator", "../../screenshots/4.png"],
    e: ["ToDo List", "This project consists in making a ToDo List (add, delete, modify)", "../../Project/5-ToDo-list", "../../screenshots/5.png"],
    f: ["Analogue clock", "This project consists in making an analog clock that updates itself in real time (rotation of the hands)", "../../Project/6-Analogue-clock", "../../screenshots/6.png"],
    g: ["Digital clock", "This project consists in making a digital clock that is updated in real time (12 or 24 hours display)", "../../Project/7-Digital-clock", "../../screenshots/7.png"],
    h: ["Addition game", "This project consists in making a calculation game which will add two random numbers, the user will have to give the result, the script will have to make an action according to the result", "../../Project/8-Addition-game", "../../screenshots/8.png"],
    i: ["HangMan", "This project consists in making a hangman game that will display a random word, the user will have to find the word by guessing it", "../../Project/9-HangMan", "../../screenshots/9.png"],
    j: ["Coin Toss", "This project consists in making a game that will throw a coin and give a random result (heads or tails) with a betting system for the player and the computer, at 5 points, the person wins", "../../Project/10-Coin-toss", "../../screenshots/10.png"],
    k: ["Rock Paper Scisors", "This project will recreate the famous rock paper scissors game but this time we play against a computer, at 10 points the person wins", "../../Project/11-RPS", "../../screenshots/11.png"],
    l: ["Magic 8 ball", "The user will give a sentence, the script will have to answer this sentence through a random result from a list of answers", "../../Project/12-Magic-8ball", "../../screenshots/12.png"],
    m: ["Epic Mix Playlist", "This project consists in displaying a music playlist after pressing a button", "../../Project/13-Epic-mix-playlist", "../../screenshots/13.png"],
    n: ["Tic Tac Toe", "This project consists in making the famous childhood game of Tic Tac Toe (the computer does not play)", "../../Project/14-Tic-Tac-Toe", "../../screenshots/14.png"],
    o: ["Stopwach", "This project consists in making a stopwatch that will display the elapsed time (hh:mm:ss) (pause, start, reset)", "../../Project/15-Stopwatch", "../../screenshots/15.png"],
    p: ["Guess the color", "This project consists in displaying a color (RGB) as well as real colors, the user will have to find to which color corresponds the RGB color", "../../Project/16-Guess-the-color", "../../screenshots/16.png"],
    q: ["Pairs", "This project consists in making a game of pairs that will display pairs of random images', the user will have to find the corresponding pairs", "../../Project/17-Pairs", "../../screenshots/17.png"],
    r: ["Palindrome", "This project consists in checking if the word given by the user is a palindrome (can be read in both directions)", "../../Project/18-Palindrome", "../../screenshots/18.png"],
    s: ["Quizz", "This project consists in making a quiz that will display random questions, the user will have to give the answer to the question and the script will make an action in concequance of the answer", "../../Project/19-Quizz", "../../screenshots/19.png"]
}
const constances = "If you think this project is to easy you can try to make the script less than 10 lines of code, you can find the minified script of every project in script-min.js"; //constance of the project
window.onload = function () { //when the page is loaded
    if (exist) { //if the type parameter exist
        document.title = texts[type][0]; //change the title of the page
        document.getElementById("title").innerHTML = texts[type][0]; //change the title of the page
        document.getElementById("description").innerHTML = texts[type][1] + "<br>" + "<i>" + constances + "<i>"; //change the description of the page
        document.getElementById("img").src = texts[type][3]; //change the image of the page*
        document.getElementById("link").href = texts[type][2]; //change the link of the page
    } else { //if the type parameter doesn't exist
        noType(); //call the noType function
    }
}


function download() { //function to download the project
    var zip = new JSZip(); //create a new JSZip object
    var css = $.get(texts[type][2] + "/style.css"); //get the style.css file
    var html = $.get(texts[type][2] + "/index.html"); //get the index.html file
    var js = $.get(texts[type][2] + "/script.js"); //get the script.js file
    var minjs = $.get(texts[type][2] + "/script-min.js"); //get the script-min.js file
    zip.file("style.css", css); //add the style.css file to the zip
    zip.file("index.html", html); //add the index.html file to the zip
    zip.file("script.js", js); //add the script.js file to the zip
    zip.file("script-min.js", minjs); //add the script-min.js file to the zip
    zip.generateAsync({ //generate the zip
        type: "blob" //the type of the zip
    }).then(function (content) { //when the zip is generated
        saveAs(content, texts[type][0] + ".zip"); //save the zip
    });
}

function downloadWithout() { //function to download the project without the script.js file
    var zip = new JSZip(); //create a new JSZip object
    var css = $.get(texts[type][2] + "/style.css"); //get the style.css file
    var html = $.get(texts[type][2] + "/index.html"); //get the index.html file
    zip.file("style.css", css); //add the style.css file to the zip
    zip.file("index.html", html); //add the index.html file to the zip
    zip.generateAsync({ //generate the zip
        type: "blob" //the type of the zip
    }).then(function (content) { //when the zip is generated
        saveAs(content, texts[type][0] + ".zip"); //save the zip
    });
}

function noType() { //function to call when the type parameter doesn't exist
    document.getElementById("title").innerHTML = "Error"; //change the title of the page
    document.getElementById("description").innerHTML = "An error occured, be sure that you are going to the right page, if the problem persist, contact the support"; //change the description of the page
}