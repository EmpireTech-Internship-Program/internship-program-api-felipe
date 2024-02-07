document.getElementById('emailForm').addEventListener('submit', function (event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if (!validateEmail(emailInput.value)) {
      emailError.textContent = 'Por favor, insira um e-mail válido.';
      event.preventDefault();
    } else {
      emailError.textContent = '';
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }