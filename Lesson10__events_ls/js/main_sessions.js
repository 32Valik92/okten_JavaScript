let divSessions = document.getElementsByClassName('sessionsDiv')[0], // Буду закидувати всі сесії
    sessionsArray = JSON.parse(localStorage.getItem('sessions')), // Масив з localStorage
    button = document.getElementsByTagName('button')[0]; // Кнопка "очищення"


// Ф-ція для очищення Div із сесій, видалення кнопки "Очищення" та додавання кнопки "Повернення"
function clear() {
    localStorage.clear(); // Очищуємо наш localStorage
    document.getElementsByClassName('clearSession')[0].remove() // Видаляємо непотрібну кнопку "Очищення"
    divSessions.remove(); // Видаляємо наш пустий div

    let divClearSession = document.createElement('div'),
        returnButton = document.createElement('button');

    //Обробка нашої кнопки "Повернення"
    divClearSession.classList.add('clearSession');
    returnButton.innerText = 'Повернутися на попередню сторінку';
    returnButton.onclick = function () {
        window.location.href = 'index.html';
    }

    // Append our elements
    divClearSession.appendChild(returnButton);
    document.body.appendChild(divClearSession);
}


// Наша сторінка буде завантажуватися, якщо localStorage непорожній
if (sessionsArray) {
    // Виводимо кожну сесію
    sessionsArray.forEach((session, index) => {
        let divSession = document.createElement('div'),
            p = document.createElement('p');

        divSession.classList.add('session');
        p.innerText = `№${index + 1} сесії — ${session}`;

        divSession.appendChild(p);
        divSessions.appendChild(divSession);
    });

    // Вішаємо на кнопку "очищення" подію, яка очищує та заміняє на кнопку "Повернення"
    button.addEventListener('click', clear);

// В іншому випадку ми відразу викликаємо нашу ф-цію заміни кнопок, щоб повернутися
} else {
    clear();
}