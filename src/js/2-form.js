const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Об'єкт для збереження введених даних
let formData = {
  email: '',
  message: '',
};

// Перевірка наявності даних у сховищі при завантаженні сторінки
document.addEventListener('DOMContentLoaded', populateFormFromStorage);

function populateFormFromStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}

// Обробка події input для зберігання значень у локальне сховище
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробка події submit
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очищення форми та сховища після відправки
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});

// Type area
document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('emailInput');

  // При фокусі додаємо плейсхолдер
  emailInput.addEventListener('focus', function () {
    emailInput.setAttribute('placeholder', 'Type area');
  });

  // При втраті фокусу видаляємо плейсхолдер
  emailInput.addEventListener('blur', function () {
    emailInput.setAttribute('placeholder', '');
  });
});
