// ----------------------
// MENU 3 : boutons "Précédent" / "Suivant" avec fade
// ----------------------
const menu3Text = document.getElementById('menu3-text');
const menu3Img = document.getElementById('menu3-img');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const states = [
  { text: 'Plus besoin de te boucher le nez pour échapper à ton odeur 😆', img: 'images/nez.jpg', alt: 'Elle se bouche le nez' },
  { text: 'Tu pourras sentir bon et faire la belleeeeee!!!', img: 'images/bellleeeeeeeeee.jpg', alt: 'Elle se fait belle' }
];

let currentIndex = 0;

function updateContent(index) {
  // Faire disparaître doucement
  menu3Text.classList.add('fade-out');
  menu3Img.classList.add('fade-out');

  setTimeout(() => {
    // Changer le texte et l'image pendant que c'est invisible
    menu3Text.textContent = states[index].text;
    menu3Img.src = states[index].img;
    menu3Img.alt = states[index].alt;

    // Faire réapparaître avec fondu
    menu3Text.classList.remove('fade-out');
    menu3Img.classList.remove('fade-out');
  }, 400); // correspond à la transition CSS
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < states.length - 1) {
    currentIndex++;
    updateContent(currentIndex);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateContent(currentIndex);
  }
});


// ----------------------
// CALENDRIER avec sauvegarde
// ----------------------
const cal = document.getElementById('calendar');
const validateBtn = document.getElementById('validate');
const selectedDatesDisplay = document.getElementById('selected-dates');

const firstDayOffset = 5; // décalage du 1er novembre
const daysInMonth = 30;

// Récupérer les dates sauvegardées
let savedDates = JSON.parse(localStorage.getItem('selectedDates')) || [];

// Génération du calendrier
for (let i = 0; i < firstDayOffset; i++) {
  const emptyDiv = document.createElement('div');
  emptyDiv.className = 'day empty';
  cal.appendChild(emptyDiv);
}

for (let d = 1; d <= daysInMonth; d++) {
  const dayDiv = document.createElement('div');
  dayDiv.className = 'day';
  dayDiv.textContent = d;

  // Si la date est dans les dates sauvegardées, on la met en sélection
  if (savedDates.includes(d)) {
    dayDiv.classList.add('selected');
  }

  dayDiv.addEventListener('click', () => {
    dayDiv.classList.toggle('selected');
  });

  cal.appendChild(dayDiv);
}

// Valider les dates
validateBtn.addEventListener('click', () => {
  const selected = [...document.querySelectorAll('.calendar .day.selected')].map(e => parseInt(e.textContent));
  localStorage.setItem('selectedDates', JSON.stringify(selected)); // Sauvegarde
  selectedDatesDisplay.textContent = 'Tu as choisi les dates : ' + selected.join(', ');
});

// Au chargement, afficher le texte si des dates étaient déjà sauvegardées
if (savedDates.length > 0) {
  selectedDatesDisplay.textContent = 'Tu as choisi les dates : ' + savedDates.join(', ');
}
