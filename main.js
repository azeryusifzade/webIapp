import { initQuran } from 'https://azeryusifzade.github.io/webIapp/modules/quran.js';
import { initDhikr } from 'https://azeryusifzade.github.io/webIapp/modules/dhikr.js';
import { initNames } from 'https://azeryusifzade.github.io/webIapp/modules/names.js';
import { initHolidays } from 'https://azeryusifzade.github.io/webIapp/modules/holidays.js';

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  initQuran();
  initDhikr();
  initNames();
  initHolidays();
});
