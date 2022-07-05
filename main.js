// Caught Speeding CS10 Review

// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let driverSpeedInput = document.getElementById("driver-speed");
let speedLimitInput = document.getElementById("speed-limit");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", determineBtnClicked);

function determineBtnClicked() {
  // Input
  let driverSpeed = +driverSpeedInput.value;
  let speedLimit = +speedLimitInput.value;
  
  testSpeed(driverSpeed,speedLimit);
}
function testSpeed(speed,limit){
// Process & Output
  if (speed >= limit + 20) {
    outputSpan.innerHTML = "BIG TICKET";
  } else if (speed > limit) {
    outputSpan.innerHTML = "SMALL TICKET";
  } else {
    outputSpan.innerHTML = "NO TICKET";
  }
}