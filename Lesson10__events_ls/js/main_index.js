// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом
let form1 = document.forms[0],
    divForm = document.getElementsByClassName('form')[0];

form1.onsubmit = function (event) {
    event.preventDefault();

    let ourRequest = document.getElementsByClassName('divForm1')[0];
    if (ourRequest) {
        ourRequest.remove();
    }

    let divForm1 = document.createElement('div'),
        h1Form1 = document.createElement('h1'),
        pForm1 = document.createElement('p');

    divForm1.classList.add('divForm1');
    h1Form1.innerText = `${form1.nameUser.value} ${form1.surName.value}`;
    pForm1.innerText = `I'm ${form1.age.value} years old`;

    divForm1.append(h1Form1, pForm1)
    divForm.appendChild(divForm1);

}
// ---------------------------------------------------------------------------------------------------------------------

// Є сторінка, на якій є блок, в якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let divNumber = document.getElementsByClassName('numberBlock')[0], // Взяли єдиний елемент з КОЛЕКЦІЇ
    number = +divNumber.textContent, //Дістаємо нашу "2" і робимо її числом
    numberJSON = JSON.parse(localStorage.getItem('ourNumber')) || number - 1;

numberJSON++;
localStorage.setItem('ourNumber', JSON.stringify(numberJSON));
divNumber.innerText = numberJSON;

// ---------------------------------------------------------------------------------------------------------------------

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сесію
let nowDate = Date();
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

sessions.push(nowDate);
localStorage.setItem('sessions', JSON.stringify(sessions));

// ---------------------------------------------------------------------------------------------------------------------

// Зробити масив на 100 об'єктів та дві кнопки prev next. при завантаженій сторінці з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів. При натисканні prev виводяться попередні 10 об'єктів

let divMain = document.createElement('div'), // червоний div, де міститься об'єкти та кнопки
    divElements = document.createElement('div'), // синій div, де містяться десять об'єктів
    divButtons = document.createElement('div'), // зелений div, де мыстяться кнопки
    prev = document.createElement('button'), // Кнопка prev
    next = document.createElement('button'); // Кнопка next

// Додаю класи для стилів
divMain.classList.add('divMain');
divElements.classList.add('divElements');
divButtons.classList.add('divButtons');
prev.classList.add('prevAndNext');
next.classList.add('prevAndNext');


prev.innerText = 'Prev 10';
next.innerText = 'Next 10';

// Пушимо каркас наший
divButtons.append(prev, next);
divMain.append(divElements, divButtons);
document.body.appendChild(divMain);


// Ф-ція, яка висвітлює наші елементи, залежно від прапорця(flag)
function click(IndexElement, flag) {

    // Дістаємо наш div з параграфами
    let divElements = document.getElementsByClassName('divElements')[0];

    // Прапорець 'next10' говорить про те, що натиснули кнопку 'next'
    if (flag === 'next10') {
        divElements.innerText = ''; // Очищуємо контейнер зі старими параграфами та виводимо ті, що треба

        // Цикл для виводу потрібних нам елементів
        for (let index = IndexElement; index < IndexElement + 10; index++) {
            let p = document.createElement('p');
            p.innerText = `name: ${arrayObjects[index].name}, number: ${arrayObjects[index].number}`;
            divElements.appendChild(p);
        }
        // Змінюю глобально наш індекс елемента, який виводився останнім, для того,
        // щоб орієнтуватися при натисканнях саме від нього
        lastIndexElement += 10;

    }

    // Прапорець 'prev10' говорить про те, що натиснули кнопку 'prev'
    if (flag === 'prev10') {
        divElements.innerText = ''; // Очищуємо контейнер зі старими параграфами та виводимо ті, що треба
        IndexElement -= 10; // Зменшую відразу, бо мені треба зміститися на два десятки, щоб від нижнього рухатися вгору

        // Цикл для виводу потрібних нам елементів
        for (let index = IndexElement - 10; index < IndexElement; index++) {
            let p = document.createElement('p');
            p.innerText = `name: ${arrayObjects[index].name}, number: ${arrayObjects[index].number}`;
            divElements.appendChild(p);
        }

        // Змінюю глобально наш індекс елемента, який виводився останнім, для того,
        // щоб орієнтуватися при натисканнях саме від нього
        lastIndexElement -= 10;
    }
}

let arrayObjects = [],
    lastIndexElement = 0; // Відштовхуємося від першого(нульового) і буде виведено перші 10

// Заповнення масиву
for (let i = 1; i <= 100; i++) {
    arrayObjects.push({name: 'object', number: i});
}


click(lastIndexElement, 'next10'); //Викликаємо для заповнення першої десятки з прапорцем 'next10'

// Подія на кнопку next, яка працює якщо останній виведений елемент не був 100-м
next.onclick = function () {
    if (lastIndexElement < 100) {
        let symbol = 'next10'; // Прапорець для функції
        click(lastIndexElement, symbol);
    }
}

// Подія на кнопку prev, яка працює якщо останній виведений елемент не був 10-м, бо попереднього десятка ми не маємо
prev.onclick = function () {
    if (lastIndexElement > 10) {
        let symbol = 'prev10'; // Прапорець для функції
        click(lastIndexElement, symbol);
    }
}


// Це інший варіант реалізації цього завдання, він більш "по програмістскі" але перший спосіб мені спав на думку відпочатку
// let currentTen = 1,
//     elementsInDiv = 10,
//     arrayObjects = [];
//
// // Заповнення масиву
// for (let i = 1; i <= 100; i++) {
//     arrayObjects.push({name: 'object', number: i});
// }
// function showP(elementsNow) {
//     divElements.innerText = '';
//     for (let object of elementsNow) {
//         let p = document.createElement('p');
//         p.innerText = `name: ${object.name}, number: ${object.number}`;
//         divElements.appendChild(p);
//     }
// }
//
// function getObjectsForTen(page, arrayObjects) {
//     let startIndex = (page - 1) * elementsInDiv,
//         finishIndex = startIndex + elementsInDiv;
//     return arrayObjects.slice(startIndex, finishIndex);
// }
//
// function updateList() {
//     const objectsToShow = getObjectsForTen(currentTen, arrayObjects);
//     showP(objectsToShow);
// }
//
// prev.onclick = function () {
//     if (currentTen > 1) {
//         currentTen--;
//         updateList();
//     }
//
// }
//
// next.onclick = function () {
//     const totalPages = Math.ceil(arrayObjects.length / elementsInDiv);
//     if (currentTen < totalPages) {
//         currentTen++;
//         updateList();
//     }
// }
//
// updateList();

// ---------------------------------------------------------------------------------------------------------------------

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// Це завдання робив минулого ДЗ :)




