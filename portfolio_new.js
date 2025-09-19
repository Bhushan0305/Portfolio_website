// portfolio_new.js


document.querySelector('.contact-form').addEventListener('submit', function(e) {
  const emailInput = this.querySelector('input[type="email"]');
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    e.preventDefault();
  }
else {
alert("Thank you! Your message has been submitted.");
}
}); 




// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Hamburger menu toggle
function toggleMenu() {
  const navUl = document.querySelector('.navlist ul');
  navUl.classList.toggle('active');
}

