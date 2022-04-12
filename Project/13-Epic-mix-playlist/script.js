const epicMix = [ // array of songs
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition"
];

const mixList = document.querySelector(".mix"); //select the mix list
const button = document.querySelector(".show-list"); //select the button
const total = document.querySelector(".total"); //select the total number of songs

button.addEventListener("click", function () { //when the button is clicked
  mixInfo(epicMix); //call the function
  mixList.classList.remove("hide"); //remove the hide class from the mix list
  button.classList.add("hide"); //add the hide class for the button
});

total.innerText = `${epicMix.length} great songs!`; //display the total number of songs

const mixInfo = function (mix) { //function to display the songs
  mix.forEach(function (song, index) { //for each song
    let li = document.createElement("li"); //create a list item
    li.classList.add("song"); //add the class of song
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`; //display the song number and name
    mixList.append(li); //append the list item to the mix list
  });
};