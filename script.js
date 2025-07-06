// Navigation simple entre sections
function navigate(sectionId) {
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

// Afficher la page d'accueil au chargement
navigate('home');

// --- Sélection des éléments ---
const matiereSelect = document.getElementById("matiere");
const modeSelect = document.getElementById("mode");
const chapitreZone = document.getElementById("chapitre-zone");
const chapitreSelect = document.getElementById("chapitre");
const quizForm = document.getElementById("quiz-form");
const quizZone = document.getElementById("quiz-zone");

// Liste des chapitres pour chaque matière autorisée
const chapitresBiologie = [
  "nutriments", "defenses_non_specifiques", "immunite", "hormones",
  "systeme_nerveux", "microbiologie", "heredite", "ogm", "ecologie"
];
const chapitresPhysique = [
  "condensateur", "magnetisme", "mecanique", "alternatif"
];
const chapitresMaths = [
  "suites", "complexes", "algebre_geometrie", "statistiques_probabilite", "analyse"
];
const chapitresChimie = [
  "chimie_minerale", "chimie_organique"
];

// Affichage dynamique des chapitres selon la matière
matiereSelect.addEventListener("change", () => {
  chapitreSelect.innerHTML = '<option value="">Choisissez un chapitre</option>';
  const matiere = matiereSelect.value;
  if (modeSelect.value === "revision") {
    if (matiere === "biologie") {
      chapitresBiologie.forEach(chap => {
        const opt = document.createElement("option");
        opt.value = chap;
        opt.textContent = chap.replace(/_/g, " ");
        chapitreSelect.appendChild(opt);
      });
      chapitreZone.style.display = "";
    } else if (matiere === "physique") {
      chapitresPhysique.forEach(chap => {
        const opt = document.createElement("option");
        opt.value = chap;
        opt.textContent = chap.replace(/_/g, " ");
        chapitreSelect.appendChild(opt);
      });
      chapitreZone.style.display = "";
    } else if (matiere === "maths") {
      chapitresMaths.forEach(chap => {
        const opt = document.createElement("option");
        opt.value = chap;
        opt.textContent = chap.replace(/_/g, " ");
        chapitreSelect.appendChild(opt);
      });
      chapitreZone.style.display = "";
    } else if (matiere === "chimie") {
      chapitresChimie.forEach(chap => {
        const opt = document.createElement("option");
        opt.value = chap;
        opt.textContent = chap.replace(/_/g, " ");
        chapitreSelect.appendChild(opt);
      });
      chapitreZone.style.display = "";
    } else {
      chapitreZone.style.display = "none";
    }
  } else {
    chapitreZone.style.display = "none";
  }
});

// Affichage/masquage du choix de chapitre selon le mode
modeSelect.addEventListener("change", () => {
  if (
    modeSelect.value === "revision" &&
    (matiereSelect.value === "biologie" ||
      matiereSelect.value === "physique" ||
      matiereSelect.value === "maths" ||
      matiereSelect.value === "chimie")
  ) {
    chapitreZone.style.display = "";
    matiereSelect.dispatchEvent(new Event("change"));
  } else {
    chapitreZone.style.display = "none";
  }
});

// --- Quiz logique ---
let questions = [];
let current = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 0;
let userAnswers = [];
let lastMatiere = null;
let lastMode = null;
let lastChapitre = null;
let chronoQuestionsTentees = 0;

quizForm.addEventListener("submit", e => {
  e.preventDefault();
  const matiere = matiereSelect.value;
  const mode = modeSelect.value;
  const chapitre = chapitreSelect.value;

  lastMatiere = matiere;
  lastMode = mode;
  lastChapitre = chapitre;

  if (
    matiere !== "biologie" &&
    matiere !== "physique" &&
    matiere !== "maths" &&
    matiere !== "chimie"
  ) {
    quizZone.innerHTML =
      "<p>Seuls les quiz de biologie, de physique, de maths et de chimie sont disponibles dans cette démo.</p>";
    return;
  }

  // Sélectionne la bonne base de questions
  const data =
    matiere === "biologie"
      ? biologie
      : matiere === "physique"
      ? physique
      : matiere === "maths"
      ? maths
      : matiere === "chimie"
      ? chimie
      : null;

  if (mode === "revision" && chapitre && data[chapitre]) {
    questions = shuffleArray(data[chapitre]).slice(0, 10);
  } else if (mode === "examen") {
    questions = shuffleArray([].concat(...Object.values(data))).slice(0, 50);
  } else if (mode === "chrono") {
    questions = shuffleArray([].concat(...Object.values(data)));
    chronoQuestionsTentees = 0;
  } else {
    quizZone.innerHTML = "<p>Veuillez choisir un chapitre.</p>";
    return;
  }
  current = 0;
  score = 0;
  userAnswers = [];
  startTimer(mode);
  showQuestion();
});

// Affiche le timer dans le quiz
function renderTimer() {
  let min = Math.floor(timeLeft / 60);
  let sec = timeLeft % 60;
  return `<div id="timer" style="font-weight:bold; color:#007acc; margin-bottom:1rem;">
    ⏰ Temps restant : ${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}
  </div>`;
}

// Lance le timer selon le mode
function startTimer(mode) {
  clearInterval(timerInterval);
  if (mode === "examen") {
    timeLeft = 60 * 60; // 60 minutes
  } else if (mode === "chrono") {
    timeLeft = 60; // 1 minute pour le challenge
  } else {
    timeLeft = 60; // 1 minute par question
  }
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (lastMode === "chrono") {
        endChronoQuiz();
      } else {
        quizZone.innerHTML = `<h3>Temps écoulé !</h3>
          <p>Score : ${score} / ${questions.length}</p>
          <button onclick="showCorrections(0)">Voir les réponses</button>
          <button onclick="restartQuiz()">Recommencer le quiz</button>`;
      }
    }
  }, 1000);
}

// Met à jour juste l'affichage du timer
function updateTimerDisplay() {
  const timerDiv = document.getElementById("timer");
  if (timerDiv)
    timerDiv.innerHTML = `⏰ Temps restant : ${String(
      Math.floor(timeLeft / 60)
    ).padStart(2, "0")}:${String(timeLeft % 60).padStart(2, "0")}`;
}

// Affiche la question courante
function showQuestion() {
  if (lastMode === "chrono" && timeLeft <= 0) {
    clearInterval(timerInterval);
    endChronoQuiz();
    return;
  }
  if (current >= questions.length) {
    clearInterval(timerInterval);
    if (lastMode === "chrono") {
      endChronoQuiz();
    } else {
      quizZone.innerHTML = `<h3>Quiz terminé !</h3>
        <p>Score : ${score} / ${questions.length}</p>
        <button onclick="showCorrections(0)">Voir les réponses</button>
        <button onclick="restartQuiz()">Recommencer le quiz</button>`;
    }
    return;
  }
  const q = questions[current];
  if (modeSelect.value === "revision") {
    startTimer("revision");
  }
  quizZone.innerHTML = `
    ${renderTimer()}
    <div>
      <h3>Question ${current + 1} / ${questions.length}</h3>
      <p>${q.question}</p>
      <div>
        ${q.options
  .map(
    (opt, i) =>
      `<button type="button" id="option-${i}" onclick="answer(${i})">${opt}</button>`
  )
  .join("<br>")}
      </div>
    </div>
  `;
}

// Gère la réponse de l'utilisateur
function answer(selected) {
  const q = questions[current];
  userAnswers[current] = selected;

  // Désactive tous les boutons
  q.options.forEach((_, i) => {
    document.getElementById(`option-${i}`).disabled = true;
  });

  // Colore le bouton choisi
  const btn = document.getElementById(`option-${selected}`);
  if (selected === q.answer) {
    score++;
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
  } else {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    // Colore aussi la bonne réponse en vert
    const goodBtn = document.getElementById(`option-${q.answer}`);
    if (goodBtn) {
      goodBtn.style.backgroundColor = "green";
      goodBtn.style.color = "white";
    }
  }

  if (lastMode === "chrono") {
    chronoQuestionsTentees++;
    setTimeout(() => {
      current++;
      showQuestion();
    }, 600);
  } else {
    if (modeSelect.value === "revision") {
      clearInterval(timerInterval);
    }
    setTimeout(() => {
      current++;
      showQuestion();
    }, 1200);
  }
  quizZone.innerHTML += result;
  if (lastMode === "chrono") {
    chronoQuestionsTentees++;
    setTimeout(() => {
      current++;
      showQuestion();
    }, 600);
  } else {
    if (modeSelect.value === "revision") {
      clearInterval(timerInterval);
    }
    setTimeout(() => {
      current++;
      showQuestion();
    }, 1200);
  }
}

// Fin du mode chrono : affiche le score, le message et les corrections
function endChronoQuiz() {
  let message = "";
  // Pour afficher la matière avec une majuscule
const matiereNom = lastMatiere.charAt(0).toUpperCase() + lastMatiere.slice(1);

if (score >= 10) {
  message = `<p style="color:green;font-weight:bold;">Bravo, tu es doué en ${matiereNom} !</p>`;
} else {
  message = `<p style="color:orange;font-weight:bold;">Tu peux faire mieux, essaie encore !</p>`;
}
  quizZone.innerHTML = `<h3>Challenge terminé !</h3>
    <p>Questions tentées : ${chronoQuestionsTentees}</p>
    <p>Bonnes réponses : ${score}</p>
    ${message}
    <button onclick="showCorrections(0)">Voir les réponses</button>
    <button onclick="restartQuiz()">Recommencer le challenge</button>`;
}

// Affiche les corrections une à une
function showCorrections(index) {
  if (index < 0) index = 0;
  if (index >= questions.length) index = questions.length - 1;
  const q = questions[index];
  const user = userAnswers[index];
  quizZone.innerHTML = `
    <div style="margin-bottom:1rem;">
      <strong>Question ${index + 1} / ${questions.length}</strong>
      <p>${q.question}</p>
      <ul>
        ${q.options
          .map(
            (opt, i) => `
          <li style="
            ${i === q.answer ? "font-weight:bold; color:green;" : ""}
            ${user === i && i !== q.answer ? "color:red;" : ""}
          ">
            ${i === q.answer ? "✅" : user === i ? "❌" : ""}
            ${opt}
            ${user === i ? " (Votre réponse)" : ""}
            ${i === q.answer ? " (Bonne réponse)" : ""}
          </li>
        `
          )
          .join("")}
      </ul>
      <p><em>Explication : ${q.explanation || "Voir le cours."}</em></p>
    </div>
    <button ${
      index === 0 ? "disabled" : ""
    } onclick="showCorrections(${index - 1})">Précédent</button>
    <button ${
      index === questions.length - 1 ? "disabled" : ""
    } onclick="showCorrections(${index + 1})">Suivant</button>
    <button onclick="restartQuiz()">Recommencer le challenge</button>
  `;
}

// Mélange un tableau (Fisher-Yates)
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Recommence le quiz/challenge avec un nouveau tirage aléatoire
function restartQuiz() {
  if (!lastMatiere) return;
  const data =
    lastMatiere === "biologie"
      ? biologie
      : lastMatiere === "physique"
      ? physique
      : lastMatiere === "maths"
      ? maths
      : lastMatiere === "chimie"
      ? chimie
      : null;
  if (lastMode === "revision" && lastChapitre && data[lastChapitre]) {
    questions = shuffleArray(data[lastChapitre]).slice(0, 10);
  } else if (lastMode === "examen") {
    questions = shuffleArray([].concat(...Object.values(data))).slice(0, 50);
  } else if (lastMode === "chrono") {
    questions = shuffleArray([].concat(...Object.values(data)));
    chronoQuestionsTentees = 0;
  } else {
    quizZone.innerHTML = "<p>Erreur lors du redémarrage du quiz.</p>";
    return;
  }
  current = 0;
  score = 0;
  userAnswers = [];
  startTimer(lastMode);
  showQuestion();
}

function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
}
// Ajoute cette fonction pour le toggle :
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}