setInterval(clock, 1000);
setInterval(blink, 500);
function clock() {
    var d, h, m, s;
    d = new Date;
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    if (hr < 10) {
        hr = "0" + hr;
    } if (min < 10) {
        min = "0" + min;
    } if (sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById('hr').innerHTML = hr;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}
function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};
function blink () {
        if (document.getElementById('blinker').style.visibility == 'visible') {
            document.getElementById('blinker').style.visibility = 'hidden';
        }  else {
            document.getElementById('blinker').style.visibility = 'visible';
        }
}