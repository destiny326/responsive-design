
  document.addEventListener('DOMContentLoaded', () => {
  // Select all <h3> elements inside <main>
  const titles = document.querySelectorAll('main article h3');

  titles.forEach(title => {
    // Style the titles to look interactive
    title.style.cursor = 'pointer';
    

    // Toggle the paragraph below when clicked
    title.addEventListener('click', () => {
      const desc = title.nextElementSibling;
      if (desc && desc.tagName === 'P') {
        desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
});
