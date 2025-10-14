const holidays2025 = [
  { name: "Ramadan", date: new Date('2025-02-28') },
  { name: "Eid al-Fitr", date: new Date('2025-03-30') },
  { name: "Eid al-Adha", date: new Date('2025-06-06') },
  { name: "Islamic New Year", date: new Date('2025-06-26') },
  { name: "Mawlid al-Nabi", date: new Date('2025-09-04') }
];

export function initHolidays() {
  const displayDiv = document.getElementById('holidays-display');

  updateCountdowns();
  setInterval(updateCountdowns, 1000);

  function updateCountdowns() {
    const now = new Date();
    let html = '';

    holidays2025.forEach((holiday) => {
      const timeRemaining = holiday.date - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        html += `
          <div class="holiday-card">
            <h3>${holiday.name}</h3>
            <div class="countdown">${days}d ${hours}h ${minutes}m ${seconds}s</div>
            <p class="holiday-date">${holiday.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
          </div>
        `;
      }
    });

    if (html === '') {
      html = '<p style="text-align: center; color: var(--gray);">No upcoming holidays this year</p>';
    }

    displayDiv.innerHTML = html;
  }
}