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
  
    var toggleBtn = document.createElement("button");
    toggleBtn.className = "faq-toggle";
    toggleBtn.innerHTML =
      '<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';
  
    newFaq.appendChild(title);
    newFaq.appendChild(text);
    newFaq.appendChild(toggleBtn);
  
    var faqContainer = document.querySelector(".faq-container");
    faqContainer.appendChild(newFaq);
  
    toggleBtn.addEventListener("click", function () {
      toggleDetails(newFaq);
    });
  
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
  }