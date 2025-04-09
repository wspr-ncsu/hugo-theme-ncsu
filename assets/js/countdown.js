function setupCountdown(element) {
  const date = element.getAttribute("data-date");
  const tz = element.getAttribute("data-tz") || "America/New_York";
  const targetDate = moment.tz(date, tz);

  function updateCountdown() {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    if (duration.asMilliseconds() > 0) {
      element.textContent = `${days}d ${hours}h ${minutes}h ${seconds}s`;
    } else {
      element.textContent = "Expired";
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function initCountdownTimers() {
  const timers = document.querySelectorAll(".countdown-timer");
  timers.forEach(setupCountdown);
}

document.addEventListener("DOMContentLoaded", function () {
  if (typeof moment !== "undefined" && typeof moment.tz !== "undefined") {
    initCountdownTimers();
  } else {
    const wait = () => {
      if (typeof moment !== "undefined" && typeof moment.tz !== "undefined") {
        initCountdownTimers();
      } else {
        setTimeout(wait, 50);
      }
    };
    wait();
  }
});
