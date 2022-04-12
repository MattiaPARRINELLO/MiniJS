var pickedColor,numSquares=6,colors=[],squares=document.querySelectorAll(".square"),colorDisplay=document.querySelector("#color-display"),messageDisplay=document.querySelector("#message"),h1=document.querySelector("h1"),resetButton=document.querySelector("#reset"),modeButtons=document.querySelectorAll(".mode"),easyButton=document.querySelector(".mode");function init(){colorDisplay.textContent=pickedColor,setupSquares(),setupMode(),reset()}function setupSquares(){for(var e=0;e<squares.length;e++)squares[e].style.backgroundColor=colors[e],squares[e].addEventListener("click",(function(){this.style.backgroundColor===pickedColor?(messageDisplay.textContent="Correct",resetButton.textContent="Play Again",changeColors(pickedColor)):(this.style.backgroundColor="#232323",messageDisplay.textContent="try again")}))}function setupMode(){for(var e=0;e<modeButtons.length;e++)modeButtons[e].addEventListener("click",(function(){for(var e=0;e<modeButtons.length;e++)modeButtons[e].classList.remove("selected");this.classList.add("selected"),numSquares="Easy"===this.textContent?3:6,reset()}))}function reset(){colors=genRandomColors(numSquares),pickedColor=chooseColor(),colorDisplay.textContent=pickedColor,h1.style.backgroundColor="#2C8E99",resetButton.textContent="New Colors",messageDisplay.textContent="";for(var e=0;e<squares.length;e++)colors[e]?(squares[e].style.display="block",squares[e].style.backgroundColor=colors[e]):squares[e].style.display="none"}function changeColors(e){for(var o=0;o<squares.length;o++)squares[o].style.backgroundColor=e,h1.style.backgroundColor=e}function chooseColor(){var e=Math.floor(Math.random()*colors.length);return colors[e]}function genRandomColors(e){for(var o=[],t=0;t<e;t++)o.push(makeColor());return o}function makeColor(){return"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"}init(),resetButton.addEventListener("click",(function(){reset()}));