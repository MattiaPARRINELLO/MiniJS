var sw = {
    etime : null, 
    erst : null, 
    ego : null, 
    timer : null, 
    now : 0, 
    init : () => {
      sw.etime = document.getElementById("sw-time");
      sw.erst = document.getElementById("sw-rst");
      sw.ego = document.getElementById("sw-go");
      sw.erst.onclick = sw.reset;
      sw.ego.onclick = sw.start;
      sw.erst.disabled = false;
      sw.ego.disabled = false;
    },
    start : () => {
      sw.timer = setInterval(sw.tick, 10);
      sw.ego.value = "Stop";
      sw.ego.onclick = sw.stop;
    },
    stop : () => {
      clearInterval(sw.timer);
      sw.timer = null;
      sw.ego.value = "Start";
      sw.ego.onclick = sw.start;
    },
    tick : () => {
      sw.now++;
      let hours = 0, mins = 0, secs = 0;
      remain = sw.now;
      hours = Math.floor(remain / 3600);
      remain -= hours * 3600;
      mins = Math.floor(remain / 60);
      remain -= mins * 60;
      secs = remain;
      if (hours<10) { hours = "0" + hours; }
      if (mins<10) { mins = "0" + mins; }
      if (secs<10) { secs = "0" + secs; }
      sw.etime.innerHTML = hours + ":" + mins + ":" + secs;
    },
    reset : () => {
      if (sw.timer != null) { sw.stop(); }
      sw.now = -1;
      sw.tick();
    }
  };
  window.addEventListener("load", sw.init);