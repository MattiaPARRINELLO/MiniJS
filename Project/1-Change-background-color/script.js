document.onkeydown = function(e) {
    if (e.keyCode == 13) {
        let color = document.getElementById('input').value 
        document.body.style.backgroundColor = color;
    }
}