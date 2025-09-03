// ⏰ Live Clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 🌗 Dark Mode Toggle
function toggleDarkMode() {
  const body = document.getElementById('body');
  body.classList.toggle('bg-gray-900');
  body.classList.toggle('text-white');
}

// 📄 PDF Download
function downloadPDF() {
  const element = document.getElementById('resume');
  html2pdf().from(element).save('Priyadarshini_Bata_Resume.pdf');
}

// 🔊 Voice Intro (Reliable Female Voice)
function speakIntro() {
  const msg = new SpeechSynthesisUtterance();
  msg.text = "Hello, my name is Priyadarshini Bata. I am a passionate learner and communicator, eager to grow professionally.";
  msg.rate = 1;
  msg.pitch = 1;

  const voices = speechSynthesis.getVoices();
  const femaleVoice = voices.find(v =>
    v.name.includes("Female") ||
    v.name.includes("Google UK English Female") ||
    v.name.includes("Microsoft Zira") ||
    v.gender === "female"
  );

  msg.voice = femaleVoice || voices[0]; // fallback
  speechSynthesis.speak(msg);
}

// 🧠 Fix voice loading delay
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {};
}

// 🎯 Scroll Reveal Animation
const fadeEls = document.querySelectorAll('.fade-in');
function revealOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);