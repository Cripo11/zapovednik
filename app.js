// Constants
const LAUNCH_ISO = "2026-03-01T20:00:00+02:00";
const UPDATE_INTERVAL = 250; 

// DOM Elements
const countdownEl = document.getElementById('countdown');
const launchMessageEl = document.getElementById('launch-message');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const copyBtn = document.getElementById('copy-date-btn');

/**
 * Calculates time remaining and updates the display
 */
function updateTimer() {
    const now = new Date().getTime();
    const launchDate = new Date(LAUNCH_ISO).getTime();
    const distance = launchDate - now;

    if (distance < 0) {
        // Timer finished
        countdownEl.classList.add('hidden');
        launchMessageEl.classList.remove('hidden');
        return;
    }

    // Calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM with leading zeros
    daysEl.innerText = days.toString().padStart(2, '0');
    hoursEl.innerText = hours.toString().padStart(2, '0');
    minutesEl.innerText = minutes.toString().padStart(2, '0');
    secondsEl.innerText = seconds.toString().padStart(2, '0');
}

/**
 * Copy launch date to clipboard
 */
function copyToClipboard() {
    navigator.clipboard.writeText(LAUNCH_ISO).then(() => {
        const originalText = copyBtn.querySelector('span').innerText;
        copyBtn.querySelector('span').innerText = "Copied!";
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.querySelector('span').innerText = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Initial call and interval
updateTimer();
setInterval(updateTimer, UPDATE_INTERVAL);

// Event Listeners
copyBtn.addEventListener('click', copyToClipboard);

// Console easter egg
console.log(
    "%c ЗАПОВЕДНИК %c SYSTEM READY ",
    "background: #ff3333; color: #000; font-weight: bold; padding: 4px;",
    "background: #05060a; color: #4efcff; padding: 4px;"
);
