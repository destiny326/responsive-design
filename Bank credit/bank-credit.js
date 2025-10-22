// Tip alert
document.querySelector('#apply-btn').addEventListener('click', () => {
  alert("Tip: Make sure your credit score is above 650 for faster approval!");
});

// Interest calculator
const amountInput = document.querySelector('#amount');
const result = document.querySelector('#result');

amountInput.addEventListener('input', () => {
  const interest = parseFloat(amountInput.value) * 0.05;
  result.textContent = `Estimated Interest: $${interest.toFixed(2)}`;
});
