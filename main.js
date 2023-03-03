// Select elements
const btnStartReading = document.querySelector('.btn-start-read');
const btnStopReading = document.querySelector('.btn-stop-read');

const speech = new SpeechSynthesisUtterance();
const language = 'it-IT';
let itVoices;

speechSynthesis.onvoiceschanged = () => {
    let voices = Array.from(speechSynthesis.getVoices());
    // console.log(voices);
    // Filter voices
    itVoices = voices.filter(voice => voice.lang === language);
    console.log(itVoices);
};

btnStartReading.onclick = () => {
    speech.text = document.querySelector('.text').textContent;
    speech.voice = itVoices[4];
    speechSynthesis.speak(speech);
};

btnStopReading.onclick = () => {
    speechSynthesis.cancel();
};
