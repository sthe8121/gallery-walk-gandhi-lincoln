
function startApp() {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').style.display = 'block';
}
function openAudio(url) {
  window.open(url, 'Audio', 'width=500,height=300');
}
const quizzes = {
  history: {correct: 1},
  science: {correct: 0},
  chemistry: {correct: 1},
  tech: {correct: 0},
  engineering: {correct: 2},
  math: {correct: 1},
  english: {correct: 0}
};
function checkQuiz(section, idx) {
  const feedback = document.getElementById(section + '-feedback');
  const correct = quizzes[section].correct === idx;
  const optionLabels = ['A','B','C','D'];
  if (correct) {
    feedback.textContent = 'Correct!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Not quite. Correct answer: ' + optionLabels[quizzes[section].correct];
    feedback.style.color = 'red';
  }
}
function saveReflection(section) {
  const text = document.getElementById(section + '-reflection').value;
  localStorage.setItem('reflection_' + section, text);
  alert('Reflection saved!');
}
function downloadReflection(section) {
  const text = localStorage.getItem('reflection_' + section) || '';
  const blob = new Blob([text], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = section + '_reflection.txt';
  a.click();
  URL.revokeObjectURL(url);
}
window.onload = function() {
  ['history','science','chemistry','tech','engineering','math','english'].forEach(section => {
    const saved = localStorage.getItem('reflection_' + section);
    if (saved) document.getElementById(section + '-reflection').value = saved;
  });
};
