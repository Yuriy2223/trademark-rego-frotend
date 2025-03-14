document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const consentCheckbox = document.getElementById('consent');
  const inputs = document.querySelectorAll(
    '.contact-form-input, .contact-form-textarea'
  );

  const validateInput = input => {
    const value = input.value.trim();
    let isValid = !!value;

    if (input.type === 'email') {
      isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    } else if (input.type === 'tel') {
      isValid = /^\+?[0-9\s\-\(\)]{7,15}$/.test(value);
    }

    input.classList.toggle('error', !isValid);
    return isValid;
  };

  const updateSubmitButtonState = () => {
    const isFormValid = Array.from(inputs).every(validateInput);
    submitBtn.disabled = !(isFormValid && consentCheckbox.checked);
  };

  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateInput(input);
      updateSubmitButtonState();
    });

    input.addEventListener('input', () => {
      validateInput(input);
      input.classList.remove('error');
      updateSubmitButtonState();
    });
  });

  consentCheckbox.addEventListener('change', updateSubmitButtonState);

  form.addEventListener('submit', event => {
    event.preventDefault();
    const isValidForm = Array.from(inputs).every(validateInput);
    if (!isValidForm) return console.warn('Форма не відправлена через помилки');

    // const formData = Object.fromEntries(new FormData(form).entries());
    const formData = Object.fromEntries(
      [...new FormData(form).entries()].filter(([key]) => key !== 'consent')
    );

    console.log('✅ Форма відправлена!', formData);
    alert('Ваше звернення успішно відправлено!');

    form.reset();
    consentCheckbox.checked = false;
    submitBtn.disabled = true;
  });
});
