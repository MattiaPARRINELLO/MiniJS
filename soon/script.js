var day = document.getElementById("days");
var hour = document.getElementById("hours");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");
var datas = "";
var json = $.getJSON("../beta.json").done(function () {
  datas = json.responseJSON;
});

setInterval(updateTimer, 1000);

function updateTimer() {
  var date = new Date();
  var endDate = new Date("July 1, 3000 12: 00: 00");

  var timeLeft = endDate - date;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}

function button() {
  //data includes the beta code
  var input = prompt("Enter your beta code");

  if (input == null) {
    return;
  } else if (datas.includes(input)) {
    window.location.href = "../?beta=" + input;
  } else {
    alert(
      "You realy through you can access the beta version of the website? YOU CAN'T!😈"
    );
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}
