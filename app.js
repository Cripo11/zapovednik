// Constants
const LAUNCH_ISO = "2026-03-01T20:00:00+03:00";
const UPDATE_INTERVAL = 250;

// DOM Elements
const countdownEl = document.getElementById('countdown');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const tooltip = document.getElementById('custom-tooltip');
const chips = document.querySelectorAll('.chip');

/**
 * Calculates time remaining and updates the display
 */
function updateTimer() {
    const now = new Date().getTime();
    const launchDate = new Date(LAUNCH_ISO).getTime();
    const distance = launchDate - now;

    if (distance < 0) {
        // Timer finished - stay at 00 or handle as needed
        if (daysEl) daysEl.innerText = "00";
        if (hoursEl) hoursEl.innerText = "00";
        if (minutesEl) minutesEl.innerText = "00";
        if (secondsEl) secondsEl.innerText = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.innerText = seconds.toString().padStart(2, '0');
}

/**
 * Tooltip Logic
 */
function moveTooltip(e) {
    // Basic cursor following
    tooltip.style.left = e.clientX + 'px';
    tooltip.style.top = e.clientY + 'px';
}

chips.forEach(chip => {
    chip.addEventListener('mouseenter', (e) => {
        const desc = chip.getAttribute('data-desc');
        if (desc) {
            tooltip.innerText = desc;
            tooltip.classList.remove('hidden');
        }
    });

    chip.addEventListener('mouseleave', () => {
        tooltip.classList.add('hidden');
    });

    chip.addEventListener('mousemove', moveTooltip);
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    setInterval(updateTimer, UPDATE_INTERVAL);

    console.log(
        "%c ЗАПОВЕДНИК %c SYSTEM READY ",
        "background: #ff3333; color: #000; font-weight: bold; padding: 4px;",
        "background: #05060a; color: #00f3ff; padding: 4px;"
    );
});
