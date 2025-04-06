document.addEventListener('DOMContentLoaded', function() {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  // Set the target date (April 15, 2025, 00:00:00 UTC)
  const targetDate = new Date('2025-04-14T18:00:00Z').getTime();

  function updateCountdown() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
          clearInterval(intervalId);
          daysElement.textContent = '00';
          hoursElement.textContent = '00';
          minutesElement.textContent = '00';
          secondsElement.textContent = '00';
          alert("It's party time!"); // You can customize this message
          return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysElement.textContent = String(days).padStart(2, '0');
      hoursElement.textContent = String(hours).padStart(2, '0');
      minutesElement.textContent = String(minutes).padStart(2, '0');
      secondsElement.textContent = String(seconds).padStart(2, '0');
  }

  // Update the countdown every second
  const intervalId = setInterval(updateCountdown, 1000);

  // Initial call to set the countdown immediately when the page loads
  updateCountdown();
});
