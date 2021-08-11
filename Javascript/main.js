var seconds = document.querySelector("#seconds");
var minutes = document.querySelector("#minutes");
var set_timer = document.querySelector('#set_timer');
var stop_timer = document.querySelector('#stop_timer');

// The counter will increase 1 each second.
var counter = 0;
// will be used to get the input from the user
var start_time = 0;
// Total_time is the total seconds value without converting to minutes
var total_time = 0;
// 
var call_clock;


//change values of seconds and minutes using counter and total_time
function convert_values(){
    seconds.value = (total_time - counter) % 60;
    minutes.value = Math.floor((total_time - counter)/60);
    
}
//Increase counter, stop with value reach 0, and call convert_values.
function clock(){
    counter++;
    convert_values();
    if ((total_time - counter) == 0){
        clearInterval(interval);
    }
    if (seconds < 0){
        clearInterval(interval);
    }
    
}

//set timer button, add new values to the total timer and start the count.
set_timer.addEventListener("click", function start_timer() {
    //Reset counter
    counter = 0;
    //check if the start_time value is positive and then add it to the total_time.
    start_time = Number(minutes.value * 60) + Number(seconds.value);
    if (start_time > 0){
        total_time = start_time;
        //Start the clock
        interval = setInterval(clock,1000);
    }
    
    

});
//Stop timer Button, stop the clock
stop_timer.addEventListener("click", function stop(){
    clearInterval(interval);
    
});
