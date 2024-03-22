const sentence = "Be great at what you love!";
const sentenceEl = document.getElementById("sentence");

function typeSentence() {
  let i = 0;
  const intervalId = setInterval(() => {
    sentenceEl.textContent += sentence[i];
    i++;
    if (i === sentence.length) {
      clearInterval(intervalId);
    }
  }, 100);
}

typeSentence();



