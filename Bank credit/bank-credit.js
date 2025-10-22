document.addEventListener('DOMContentLoaded', () => {
  // Enhancement 1: Highlight row on hover
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.backgroundColor = '#f0f8ff'; // light blue
    });
    row.addEventListener('mouseleave', () => {
      row.style.backgroundColor = '';
    });
  });

  // Enhancement 2: Show alert when page loads
  alert("Welcome to the Bank Credit page! Hover over rows to highlight them.");
});