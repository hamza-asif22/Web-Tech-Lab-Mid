const toggles = document.querySelectorAll('.faq-toggle');
const closeButtons = document.querySelectorAll('.fa-times');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parentElement = toggle.parentNode;
    parentElement.classList.toggle('active');
  });
});

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    const parentElement = closeButton.parentNode.parentNode;
    parentElement.remove();
  });
});

function add() {
    var questionInput = document.getElementById("question").value;
    var answerInput = document.getElementById("answer").value;
  
    var newFaq = document.createElement("div");
    newFaq.className = "faq";
  
    var title = document.createElement("h3");
    title.className = "faq-title";
    title.appendChild(document.createTextNode(questionInput));
  
    var text = document.createElement("p");
    text.className = "faq-text";
    text.appendChild(document.createTextNode(answerInput));
  
  }