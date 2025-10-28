// Menu 3 : boutons "Précédent" / "Suivant"
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
  menu3Text.classList.add('fade-out');
  menu3Img.classList.add('fade-out');
  setTimeout(()=>{
    menu3Text.textContent = states[index].text;
    menu3Img.src = states[index].img;
    menu3Img.alt = states[index].alt;
    menu3Text.classList.remove('fade-out');
    menu3Img.classList.remove('fade-out');
  }, 400);
}

nextBtn.addEventListener('click', ()=>{
  if(currentIndex < states.length - 1){
    currentIndex++;
    updateContent(currentIndex);
  }
});

prevBtn.addEventListener('click', ()=>{
  if(currentIndex > 0){
    currentIndex--;
    updateContent(currentIndex);
  }
});

// Génération du calendrier
const cal = document.getElementById('calendar');
const firstDayOffset = 5; // 0 = dimanche, ici 1er novembre commence à vendredi
const daysInMonth = 30;

for(let i = 0; i < firstDayOffset; i++){
  const emptyDiv = document.createElement('div');
  emptyDiv.className = 'day empty';
  cal.appendChild(emptyDiv);
}

for(let d = 1; d <= daysInMonth; d++){
  const dayDiv = document.createElement('div');
  dayDiv.className = 'day';
  dayDiv.textContent = d;
  dayDiv.addEventListener('click', ()=> dayDiv.classList.toggle('selected'));
  cal.appendChild(dayDiv);
}

document.getElementById('validate').addEventListener('click', ()=>{
  const selected = [...document.querySelectorAll('.calendar .day.selected')].map(e=>e.textContent);
  document.getElementById('selected-dates').textContent = 'Tu as choisi les dates : ' + selected.join(', ');
});
