// Mobile menu: button dabane par menu khulega / band hoga
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Menu ka link dabane par mobile menu band ho jaye
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// Demo form: submit par thank you message dikhao
const demoForm = document.getElementById("demoForm");
const formMsg = document.getElementById("formMsg");

demoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // page reload hone se roko

  const name = document.getElementById("name").value.trim();
  formMsg.textContent = "Thank you, " + name + "! Demo class ka link jaldi email par aayega.";

  demoForm.reset();
});