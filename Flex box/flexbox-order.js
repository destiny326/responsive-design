
  // Highlight sections on hover
document.querySelectorAll('body > *').forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.style.opacity = '0.8';
  });
  section.addEventListener('mouseleave', () => {
    section.style.opacity = '1';
  });
});

// Add border on wide screens
window.addEventListener('resize', () => {
  const body = document.querySelector('body');
  if (window.innerWidth >= 800) {
    body.style.border = "5px solid tomato";
  } else {
    body.style.border = "none";
  }
});
