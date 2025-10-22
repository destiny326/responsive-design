// Alert on submit
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

// Auto-resize textarea
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
});
