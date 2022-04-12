function showTime() { //function to show the time

    var date = new Date(); //create a new date object
    var h = date.getHours(); //get the hours
    var m = date.getMinutes(); //get the minutes
    var s = date.getSeconds(); //get the seconds

    var session = "AM"; //create a variable to store the session

    0 == h && (h = 12); //if the hours is 0, set the hours to 12
    h > 12 && (h -= 12, session = "PM"); //if the hours is greater than 12, subtract 12 and set the session to PM

    h = h < 10 ? "0" + h : h, m = m < 10 ? "0" + m : m, s = s < 10 ? "0" + s : s; //add a zero in front of the hours, minutes and seconds if they are less than 10
    var time = h + ":" + m + ":" + s + " " + session; //create the time variable

    document.getElementById("display").innerText = time; //display the time
    document.getElementById("display").textContent = time; //display the time
    
    setTimeout(showTime, 1000); //call the showTime function every second
}
showTime(); //call the showTime function