let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let startTimer = document.querySelector("#start_timer");
let resetTimer = document.querySelector("#reset_timer");
let timerIsRunning = false;
let interval;
// The counter will increase 1 each second.
let counter = 0;
// will be used to get the input from the user
let startInput = 0;
// Total_timer is the total seconds value without converting to minutes
let total_timer = 0;
//
let call_clock;

//change values of seconds and minutes using counter and total_timer
function convert_values() {
  seconds.value = (total_timer - counter) % 60;
  minutes.value = Math.floor((total_timer - counter) / 60);
}
//Increase counter, stop with value reach 0, and call convert_values.
function clock() {
  counter++;
  convert_values();
  if (total_timer - counter == 0) {
    clearInterval(interval);
    stopCouting();
  }
  if (seconds < 0) {
    clearInterval(interval);
    stopCouting();
  }
}

//set timer button, add new values to the total timer and start the count.
function startHandler() {
  if (timerIsRunning) {
    stopCouting();
  } else {
    // Reset counter
    counter = 0;
    // check if the startInput value is positive and then add it to the total_timer.
    startInput = Number(minutes.value * 60) + Number(seconds.value);
    if (startInput > 0) {
      total_timer = startInput;
      //Start the clock
      interval = setInterval(clock, 1000);

      // CHANGE THE BUTTON FROM SET TO STOP timer
      startTimer.classList.add("stop_timer");
      startTimer.classList.remove("start_timer");
      startTimer.innerHTML = "Stop";
      timerIsRunning = true;
    } else {
      // The input(minutes and seconds) will reset if the user tries to enter a negative value
      resetTimerHandler();
    }
  }
}

function stopCouting() {
  clearInterval(interval);
  timerIsRunning = false;
  // CHANGE THE BUTTON FROM STOP TO SET timer
  startTimer.classList.add("start_timer");
  startTimer.classList.remove("stop_timer");
  startTimer.innerHTML = "Start";
}

//start timer Button, stop the clock
startTimer.addEventListener("click", startHandler);

// RESET TIMER BUTTON
function resetTimerHandler() {
  stopCouting();
  counter = 0;
  seconds.value = 0;
  minutes.value = 0;
}

resetTimer.addEventListener("click", resetTimerHandler);
