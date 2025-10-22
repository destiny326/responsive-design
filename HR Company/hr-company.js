
  document.querySelectorAll('.job-title').forEach(title => {
    title.addEventListener('click', () => {
      const desc = title.nextElementSibling;
      desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
    });
  });

  document.querySelectorAll('.job-title').forEach(title => {
    title.style.cursor = 'pointer';
    title.style.color = 'deepskyblue';
  });

