let number = 0;
function increment() {
    number++;
    document.getElementById("counter").innerHTML = number;
} 
function decrement() {
    number--;
    document.getElementById("counter").innerHTML = number;
}