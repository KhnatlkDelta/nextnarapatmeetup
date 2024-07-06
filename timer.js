// Set the date we're counting up from (replace with your desired date and time)
var startDate = new Date("July 6, 2024 22:30:00").getTime();

// Update the countdown timer every 1 second
var countdown = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the elapsed time in milliseconds
  var distance = now - startDate;

  // Calculate years, months, days, hours, minutes, and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  minutes = minutes > 0 ? (minutes < 10 ? "0" : "") + minutes + "m " : "";
  hours = hours > 0 ? (hours < 10 ? "0" : "") + hours + "h " : "";
  days = days > 0 ? (days < 10 ? "0" : "") + days + "D " : "";
  months = months > 0 ? (months < 10 ? "0" : "") + months + "M " : "";
  years = years >= 1 ? years + "Y " : "";

  // Format the countdown timer with leading zeros
  var formattedCountdown = 
    (years + months + days + hours + minutes + (seconds >= 0 ? (seconds < 10 ? "0" + seconds : seconds) : "") + "s.") || "";
  // Display the countdown timer in the HTML element with id "countdown"
  document.getElementById("countdown").innerHTML = formattedCountdown;

}, 1000); // Update every 1 second
