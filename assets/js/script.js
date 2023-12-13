/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: JS clock
(c) Copyright by BRS with Nyros. 
**/

/* Get DOM Elements */
const secondHand = document.querySelector(".secondHand");
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");

// Helper function responsible for calculating the amount to rotate a hand
const calcDegrees = (time, max) => (time / max) * 360;

function updateClock() {
  // Create new Date object
  const currentTime = new Date();


  // console.log(currentTime);

  // Get current seconds, minutes, & hours and calculate the degree shift
  const secondHandDegrees = calcDegrees(currentTime.getSeconds(), 60);
  const minuteHandDegrees = calcDegrees(currentTime.getMinutes(), 60);
  const hourHandDegrees = calcDegrees(
    currentTime.getHours() * 60 + currentTime.getMinutes(),
    720 // 12 hours * 60 minutes
  );

  console.log(minuteHandDegrees);
  console.log(hourHandDegrees);
  // Apply rotation to the clock hands corresponding with current time value
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}

// update clock for each time
setInterval(updateClock, 1000);

let chathams_blue = "#1A4B84";

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
function updateDateTime() {
  var currentDate = new Date();
  var amAndPm = "PM";
  var year = currentDate.getFullYear();
  var month = currentDate.toLocaleString('default', { month: 'long' });
  var day = currentDate.getDate();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var formattedDate = month + ' ' + day + ', ' + year;
  var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  if(hours < 12){
    result = "AM";
  }else {
    result = amAndPm;
  }
  document.getElementById('date').innerHTML = "Current Date: " + formattedDate;
  document.getElementById('time').innerHTML = "Current Time: " + formattedTime + " " + result;
}
setInterval(updateDateTime, 1000);
updateDateTime();