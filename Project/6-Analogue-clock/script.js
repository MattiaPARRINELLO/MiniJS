setInterval(clock, 1000); //call clock function every second
setInterval(blink, 500); //call blink function every half second

function clock() { //function to display the time
    var d, h, m, s; //declare variables
    d = new Date; //create a new date object

    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60); //calculate the hours
    m = 6 * d.getMinutes(); //calculate the minutes
    s = 6 * d.getSeconds(); //calculate the seconds

    setAttr('h-hand', h); //set the hours hand with setAttr function
    setAttr('m-hand', m); //set the minutes hand with setAttr function
    setAttr('s-hand', s); //set the seconds hand with setAttr function
    setAttr('s-tail', s + 180); //set the seconds tail

    hr = d.getHours(); //get the hours
    min = d.getMinutes(); //get the minutes
    sec = d.getSeconds(); //get the seconds

    hr < 10 && (hr = "0" + hr), min < 10 && (min = "0" + min), sec < 10 && (sec = "0" + sec); //add a zero in front of the hours, minutes and seconds if they are less than 10

    document.getElementById('hr').innerHTML = hr; //display the hours
    document.getElementById('min').innerHTML = min; //display the minutes
    document.getElementById('sec').innerHTML = sec; //display the seconds
}

function setAttr(id, val) { //function to set the attribute of an element
    var v = 'rotate(' + val + ', 70, 70)'; //create the value of the attribute
    document.getElementById(id).setAttribute('transform', v); //set the attribute
};

function blink() { //function to blink the colon
    if (document.getElementById('blinker').style.visibility == 'visible') { //if the colon is visible
        document.getElementById('blinker').style.visibility = 'hidden'; //hide the colon
    } else { //if the colon is hidden
        document.getElementById('blinker').style.visibility = 'visible'; //show the colon
    }
}