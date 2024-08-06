// document.addEventListener('DOMContentLoaded', function() {
//     const loginButton = document.getElementById('loginButton');
//     // const progressBar = document.getElementById('progressBar');
//     const progress = document.getElementById('progress');

//     loginButton.addEventListener('click', function(event) {
//       event.preventDefault();

//       // Получаем значения логина и пароля
//       const username = document.getElementById('username').value;
//       const password = document.getElementById('password').value;

//       // Проверяем правильность логина и пароля (здесь у вас должен быть ваш метод проверки)
//       if (username === '1' && password === '1') {
//         // Показываем прогресс-бар
//         progressBar.style.display = 'block';

//         // Симулируем загрузку данных (прогресс-бар увеличивается)
//         let width = 0;
//         const interval = setInterval(function() {
//           width += 10;
//           progress.style.width = width + '%';

//           if (width >= 100) {
//             clearInterval(interval);
//             // После завершения загрузки перенаправляем пользователя на страницу "index.html"
//             window.location.href = 'index.html';
//           }
//         }, 150);
//       } else {
//         alert("Parol yoki login notogri tekshirip qaytatan tering");
//         console.log('Неправильный логин или пароль');
//       }
//     });
//   });
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает стандартное поведение формы

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Простая проверка
    if (email === 'u@gmail.com' && password === '123') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password');
    }
});


const translations = {
    en: {
        login: "Login",
        emailLabel: "Email:",
        passwordLabel: "Password:",
        loginButton: "Login"
    },
    uz: {
        login: "Kirish",
        emailLabel: "Email:",
        passwordLabel: "Parol:",
        loginButton: "Kirish"
    }
};

document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLanguage = this.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        element.textContent = translations[language][translationKey];
    });
}

// Начальная установка языка
translatePage('en');
