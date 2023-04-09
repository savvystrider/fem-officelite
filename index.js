const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let countdownDate = new Date("Nov 4, 2024").getTime();

let update = setInterval(function() {
    let now = new Date().getTime();

    let distance = countdownDate - now;

    let remainingDays = Math.floor(distance / (1000 * 60 *60 *24));
    let remainingHours = Math.floor((distance % (1000 * 60 *60 * 24)) / (1000 * 60 * 60));
    let remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = remainingDays;
    hours.textContent = remainingHours;
    minutes.textContent = remainingMinutes;
    seconds.textContent = remainingSeconds;

    if (distance < 0) {
        clearInterval(update);
        document.getElementById("counter").innerHTML = "EXPIRED";
    }
}, 1000);