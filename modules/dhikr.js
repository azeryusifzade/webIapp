const adhkar = [
  { arabic: "سُبْحَانَ اللَّهِ", transliteration: "SubhanAllah" },
  { arabic: "الْحَمْدُ لِلَّهِ", transliteration: "Alhamdulillah" },
  { arabic: "اللَّهُ أَكْبَرُ", transliteration: "Allahu Akbar" },
  { arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ", transliteration: "La ilaha illallah" },
  { arabic: "أَسْتَغْفِرُ اللَّهَ", transliteration: "Astaghfirullah" },
  { arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", transliteration: "La hawla wa la quwwata illa billah" },
  { arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", transliteration: "SubhanAllahi wa bihamdihi" },
  { arabic: "سُبْحَانَ اللَّهِ الْعَظِيمِ", transliteration: "SubhanAllahi al-Adheem" },
  { arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", transliteration: "Allahumma salli ala Muhammad" },
  { arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", transliteration: "Hasbunallahu wa nimal wakeel" },
  { arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "Bismillah ir-Rahman ir-Raheem" },
  { arabic: "رَبِّ اغْفِرْ لِي", transliteration: "Rabbi ighfir li" }
];

let currentDhikrIndex = 0;
let count = 0;

export function initDhikr() {
  const dhikrText = document.querySelector('.dhikr-text');
  const countBtn = document.getElementById('dhikr-count');
  const countNumber = document.getElementById('count-number');
  const nextBtn = document.getElementById('next-dhikr');
  const resetBtn = document.getElementById('reset-dhikr');

  function showCurrentDhikr() {
    const current = adhkar[currentDhikrIndex];
    dhikrText.innerHTML = `
      <div>${current.arabic}</div>
      <div style="font-size:1rem; margin-top:0.5rem;">${current.transliteration}</div>
    `;
  }

  showCurrentDhikr();

  countBtn.addEventListener('click', () => {
    count++;
    countNumber.textContent = count;
    countBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      countBtn.style.transform = '';
    }, 100);
  });

  nextBtn.addEventListener('click', () => {
    currentDhikrIndex = (currentDhikrIndex + 1) % adhkar.length;
    count = 0;
    countNumber.textContent = count;
    showCurrentDhikr();
  });

  resetBtn.addEventListener('click', () => {
    count = 0;
    countNumber.textContent = count;
  });
}
