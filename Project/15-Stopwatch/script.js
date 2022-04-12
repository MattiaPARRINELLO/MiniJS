var sw = { // Stopwatch object
    etime : null, // Time elapsed
    erst : null,  // Reset button object
    ego : null,  // Go button object 
    timer : null,  // Timer
    now : 0, // Current time

    init : () => { // Initialize
      sw.etime = document.getElementById("sw-time"); // Time element 
      sw.erst = document.getElementById("sw-rst"); // Reset button
      sw.ego = document.getElementById("sw-go"); // Go button

      sw.erst.onclick = sw.reset; // Reset button click event
      sw.ego.onclick = sw.start; // Go button click event
      sw.erst.disabled = false; // Disable reset button
      sw.ego.disabled = false; // Disable go button
    },

    start : () => { // Start
      sw.timer = setInterval(sw.tick, 10); // Set timer
      sw.ego.value = "Stop"; // Change button text
      sw.ego.onclick = sw.stop; // Change button event
    },

    stop : () => { // Stop
      clearInterval(sw.timer); // Clear timer

      sw.timer = null; // Reset timer
      sw.ego.value = "Start"; // Change button text
      sw.ego.onclick = sw.start; // Change button event
    },
    tick : () => { // Tick
      sw.now++; // Increment time

      let hours = 0, mins = 0, secs = 0; // Initialize variables

      remain = sw.now; // Get remaining time
      hours = Math.floor(remain / 3600); // Get hours
      remain -= hours * 3600; // Subtract hours from remaining time
      mins = Math.floor(remain / 60); // Get minutes
      remain -= mins * 60; // Subtract minutes from remaining time
      secs = remain; // Get seconds

      if (hours<10) { hours = "0" + hours; } // Add leading zero
      if (mins<10) { mins = "0" + mins; } // Add leading zero
      if (secs<10) { secs = "0" + secs; } // Add leading zero

      sw.etime.innerHTML = hours + ":" + mins + ":" + secs; // Display time
    },

    reset : () => { // Reset
      if (sw.timer != null) { sw.stop(); } // Stop timer

      sw.now = -1; // Reset time
      sw.tick(); // Update time
    }
  };

  window.addEventListener("load", sw.init); // Initialize