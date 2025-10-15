const surahs = [
  { number: 1, name: "Al-Fatihah", translation: "The Opening", ayahs: 7 },
  { number: 2, name: "Al-Baqarah", translation: "The Cow", ayahs: 286 },
  { number: 3, name: "Aali Imran", translation: "Family of Imran", ayahs: 200 },
  { number: 4, name: "An-Nisa", translation: "The Women", ayahs: 176 },
  { number: 5, name: "Al-Ma'idah", translation: "The Table Spread", ayahs: 120 },
  { number: 6, name: "Al-An'am", translation: "The Cattle", ayahs: 165 },
  { number: 7, name: "Al-A'raf", translation: "The Heights", ayahs: 206 },
  { number: 8, name: "Al-Anfal", translation: "The Spoils of War", ayahs: 75 },
  { number: 9, name: "At-Tawbah", translation: "The Repentance", ayahs: 129 },
  { number: 10, name: "Yunus", translation: "Jonah", ayahs: 109 },
  { number: 11, name: "Hud", translation: "Hud", ayahs: 123 },
  { number: 12, name: "Yusuf", translation: "Joseph", ayahs: 111 },
  { number: 13, name: "Ar-Ra'd", translation: "The Thunder", ayahs: 43 },
  { number: 14, name: "Ibrahim", translation: "Abraham", ayahs: 52 },
  { number: 15, name: "Al-Hijr", translation: "The Rocky Tract", ayahs: 99 },
  { number: 16, name: "An-Nahl", translation: "The Bee", ayahs: 128 },
  { number: 17, name: "Al-Isra", translation: "The Night Journey", ayahs: 111 },
  { number: 18, name: "Al-Kahf", translation: "The Cave", ayahs: 110 },
  { number: 19, name: "Maryam", translation: "Mary", ayahs: 98 },
  { number: 20, name: "Ta-Ha", translation: "Ta-Ha", ayahs: 135 },
  { number: 21, name: "Al-Anbiya", translation: "The Prophets", ayahs: 112 },
  { number: 22, name: "Al-Hajj", translation: "The Pilgrimage", ayahs: 78 },
  { number: 23, name: "Al-Mu'minun", translation: "The Believers", ayahs: 118 },
  { number: 24, name: "An-Nur", translation: "The Light", ayahs: 64 },
  { number: 25, name: "Al-Furqan", translation: "The Criterion", ayahs: 77 },
  { number: 26, name: "Ash-Shu'ara", translation: "The Poets", ayahs: 227 },
  { number: 27, name: "An-Naml", translation: "The Ant", ayahs: 93 },
  { number: 28, name: "Al-Qasas", translation: "The Stories", ayahs: 88 },
  { number: 29, name: "Al-Ankabut", translation: "The Spider", ayahs: 69 },
  { number: 30, name: "Ar-Rum", translation: "The Romans", ayahs: 60 },
  { number: 31, name: "Luqman", translation: "Luqman", ayahs: 34 },
  { number: 32, name: "As-Sajdah", translation: "The Prostration", ayahs: 30 },
  { number: 33, name: "Al-Ahzab", translation: "The Combined Forces", ayahs: 73 },
  { number: 34, name: "Saba", translation: "Sheba", ayahs: 54 },
  { number: 35, name: "Fatir", translation: "Originator", ayahs: 45 },
  { number: 36, name: "Ya-Sin", translation: "Ya-Sin", ayahs: 83 },
  { number: 37, name: "As-Saffat", translation: "Those Ranges in Ranks", ayahs: 182 },
  { number: 38, name: "Sad", translation: "The Letter Sad", ayahs: 88 },
  { number: 39, name: "Az-Zumar", translation: "The Groups", ayahs: 75 },
  { number: 40, name: "Ghafir", translation: "The Forgiver", ayahs: 85 },
  { number: 41, name: "Fussilat", translation: "Explained in Detail", ayahs: 54 },
  { number: 42, name: "Ash-Shura", translation: "The Consultation", ayahs: 53 },
  { number: 43, name: "Az-Zukhruf", translation: "The Ornaments of Gold", ayahs: 89 },
  { number: 44, name: "Ad-Dukhan", translation: "The Smoke", ayahs: 59 },
  { number: 45, name: "Al-Jathiyah", translation: "The Crouching", ayahs: 37 },
  { number: 46, name: "Al-Ahqaf", translation: "The Wind-Curved Sandhills", ayahs: 35 },
  { number: 47, name: "Muhammad", translation: "Muhammad", ayahs: 38 },
  { number: 48, name: "Al-Fath", translation: "The Victory", ayahs: 29 },
  { number: 49, name: "Al-Hujurat", translation: "The Rooms", ayahs: 18 },
  { number: 50, name: "Qaf", translation: "The Letter Qaf", ayahs: 45 },
  { number: 51, name: "Adh-Dhariyat", translation: "The Winnowing Winds", ayahs: 60 },
  { number: 52, name: "At-Tur", translation: "The Mount", ayahs: 49 },
  { number: 53, name: "An-Najm", translation: "The Star", ayahs: 62 },
  { number: 54, name: "Al-Qamar", translation: "The Moon", ayahs: 55 },
  { number: 55, name: "Ar-Rahman", translation: "The Beneficent", ayahs: 78 },
  { number: 56, name: "Al-Waqi'ah", translation: "The Inevitable", ayahs: 96 },
  { number: 57, name: "Al-Hadid", translation: "The Iron", ayahs: 29 },
  { number: 58, name: "Al-Mujadila", translation: "The Pleading Woman", ayahs: 22 },
  { number: 59, name: "Al-Hashr", translation: "The Exile", ayahs: 24 },
  { number: 60, name: "Al-Mumtahanah", translation: "She That is to be Examined", ayahs: 13 },
  { number: 61, name: "As-Saf", translation: "The Ranks", ayahs: 14 },
  { number: 62, name: "Al-Jumu'ah", translation: "Friday", ayahs: 11 },
  { number: 63, name: "Al-Munafiqun", translation: "The Hypocrites", ayahs: 11 },
  { number: 64, name: "At-Taghabun", translation: "The Mutual Disillusion", ayahs: 18 },
  { number: 65, name: "At-Talaq", translation: "The Divorce", ayahs: 12 },
  { number: 66, name: "At-Tahrim", translation: "The Prohibition", ayahs: 12 },
  { number: 67, name: "Al-Mulk", translation: "The Sovereignty", ayahs: 30 },
  { number: 68, name: "Al-Qalam", translation: "The Pen", ayahs: 52 },
  { number: 69, name: "Al-Haqqah", translation: "The Reality", ayahs: 52 },
  { number: 70, name: "Al-Ma'arij", translation: "The Ascending Stairways", ayahs: 44 },
  { number: 71, name: "Nuh", translation: "Noah", ayahs: 28 },
  { number: 72, name: "Al-Jinn", translation: "The Jinn", ayahs: 28 },
  { number: 73, name: "Al-Muzzammil", translation: "The Enshrouded One", ayahs: 20 },
  { number: 74, name: "Al-Muddaththir", translation: "The Cloaked One", ayahs: 56 },
  { number: 75, name: "Al-Qiyamah", translation: "The Resurrection", ayahs: 40 },
  { number: 76, name: "Al-Insan", translation: "Man", ayahs: 31 },
  { number: 77, name: "Al-Mursalat", translation: "The Emissaries", ayahs: 50 },
  { number: 78, name: "An-Naba", translation: "The Tidings", ayahs: 40 },
  { number: 79, name: "An-Nazi'at", translation: "Those Who Drag Forth", ayahs: 46 },
  { number: 80, name: "Abasa", translation: "He Frowned", ayahs: 42 },
  { number: 81, name: "At-Takwir", translation: "The Overthrowing", ayahs: 29 },
  { number: 82, name: "Al-Infitar", translation: "The Cleaving", ayahs: 19 },
  { number: 83, name: "Al-Mutaffifin", translation: "The Defrauding", ayahs: 36 },
  { number: 84, name: "Al-Inshiqaq", translation: "The Sundering", ayahs: 25 },
  { number: 85, name: "Al-Buruj", translation: "The Mansions of the Stars", ayahs: 22 },
  { number: 86, name: "At-Tariq", translation: "The Nightcomer", ayahs: 17 },
  { number: 87, name: "Al-A'la", translation: "The Most High", ayahs: 19 },
  { number: 88, name: "Al-Ghashiyah", translation: "The Overwhelming", ayahs: 26 },
  { number: 89, name: "Al-Fajr", translation: "The Dawn", ayahs: 30 },
  { number: 90, name: "Al-Balad", translation: "The City", ayahs: 20 },
  { number: 91, name: "Ash-Shams", translation: "The Sun", ayahs: 15 },
  { number: 92, name: "Al-Layl", translation: "The Night", ayahs: 21 },
  { number: 93, name: "Ad-Duha", translation: "The Morning Hours", ayahs: 11 },
  { number: 94, name: "Ash-Sharh", translation: "The Relief", ayahs: 8 },
  { number: 95, name: "At-Tin", translation: "The Fig", ayahs: 8 },
  { number: 96, name: "Al-Alaq", translation: "The Clot", ayahs: 19 },
  { number: 97, name: "Al-Qadr", translation: "The Power", ayahs: 5 },
  { number: 98, name: "Al-Bayyinah", translation: "The Clear Proof", ayahs: 8 },
  { number: 99, name: "Az-Zalzalah", translation: "The Earthquake", ayahs: 8 },
  { number: 100, name: "Al-Adiyat", translation: "The Courser", ayahs: 11 },
  { number: 101, name: "Al-Qari'ah", translation: "The Calamity", ayahs: 11 },
  { number: 102, name: "At-Takathur", translation: "The Rivalry in World Increase", ayahs: 8 },
  { number: 103, name: "Al-Asr", translation: "The Declining Day", ayahs: 3 },
  { number: 104, name: "Al-Humazah", translation: "The Traducer", ayahs: 9 },
  { number: 105, name: "Al-Fil", translation: "The Elephant", ayahs: 5 },
  { number: 106, name: "Quraysh", translation: "Quraysh", ayahs: 4 },
  { number: 107, name: "Al-Ma'un", translation: "The Small Kindnesses", ayahs: 7 },
  { number: 108, name: "Al-Kawthar", translation: "The Abundance", ayahs: 3 },
  { number: 109, name: "Al-Kafirun", translation: "The Disbelievers", ayahs: 6 },
  { number: 110, name: "An-Nasr", translation: "The Divine Support", ayahs: 3 },
  { number: 111, name: "Al-Masad", translation: "The Palm Fiber", ayahs: 5 },
  { number: 112, name: "Al-Ikhlas", translation: "The Sincerity", ayahs: 4 },
  { number: 113, name: "Al-Falaq", translation: "The Daybreak", ayahs: 5 },
  { number: 114, name: "An-Nas", translation: "Mankind", ayahs: 6 }
];

export function initQuran() {
  const surahSelect = document.getElementById('surah-select');
  const loadBtn = document.getElementById('load-surah');
  const displayDiv = document.getElementById('quran-display');

  surahs.forEach((surah) => {
    const option = document.createElement('option');
    option.value = surah.number;
    option.textContent = `${surah.number}. ${surah.name} (${surah.translation})`;
    surahSelect.appendChild(option);
  });

  loadBtn.addEventListener('click', () => {
    const surahNumber = surahSelect.value;
    if (surahNumber) fetchSurah(surahNumber);
  });

  surahSelect.addEventListener('change', () => {
    if (surahSelect.value) loadBtn.click();
  });
}

async function fetchSurah(surahNumber) {
  const displayDiv = document.getElementById('quran-display');
  displayDiv.innerHTML = '<div class="loading">Loading Surah...</div>';

  const cached = localStorage.getItem(`surah-${surahNumber}`);
  if (cached) {
    displaySurah(JSON.parse(cached));
    return;
  }

  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.sahih`
    );
    const data = await response.json();

    if (data.code !== 200) throw new Error('Failed to fetch Surah');
    
    localStorage.setItem(`surah-${surahNumber}`, JSON.stringify(data.data));

    displaySurah(data.data);
  } catch (error) {
    displayDiv.innerHTML = `<div class="error">Error: ${error.message}. Please try again.</div>`;
  }
}

function displaySurah(data) {
  const displayDiv = document.getElementById('quran-display');
  const arabicSurah = data[0];
  const translationSurah = data[1];
  const surahInfo = surahs[arabicSurah.number - 1];

  let html = `
    <div class="surah-header">
      <h3>${arabicSurah.name} - ${surahInfo.name}</h3>
      <p>${surahInfo.translation} - ${arabicSurah.numberOfAyahs} Ayahs</p>
    </div>
  `;

  arabicSurah.ayahs.forEach((ayah, index) => {
    html += `
      <div class="ayah">
        <div class="ayah-number">Ayah ${ayah.numberInSurah}</div>
        <div class="ayah-arabic">${ayah.text}</div>
        <div class="ayah-translation">${translationSurah.ayahs[index].text}</div>
      </div>
    `;
  });

  displayDiv.innerHTML = html;
}
