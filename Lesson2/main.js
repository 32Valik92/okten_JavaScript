// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = ['zero', 'first', 2, 3, 4, 5, 6, 7, true, false];
console.log(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4], arr1[5], arr1[6], arr1[7], arr1[8], arr1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Know my name', pageCount: 399, genre: 'Action'},
    book2 = {title: 'Echo by', pageCount: 248, genre: 'Drama'},
    book3 = {title: 'Wizard', pageCount: 124, genre: 'Horror'};


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
        title: 'EMPTY THEATRE',
        pageCount: 223, genre: 'Action',
        authors: [{name: 'Alex', age: 33}, {name: 'Alan', age: 22}]
    },
    book5 = {
        title: 'THE RED BALCONY',
        pageCount: 543,
        genre: 'Horror',
        authors: [{name: 'Kate', age: 23}, {name: 'Kristina', age: 42}]
    },
    book6 = {
        title: 'WHEN TRYING TO RETURN HOME',
        pageCount: 234,
        genre: 'Drama',
        authors: [{name: 'Adam', age: 55}, {name: 'Nikola', age: 41}]
    };

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr2 = [
    {name: 'Alex', username: 'userAlex', password: '123'},
    {name: 'Kate', username: 'userKate', password: '234'},
    {name: 'Adam', username: 'userAdam', password: '345'},
    {name: 'Alan', username: 'userAlan', password: '456'},
    {name: 'Kristina', username: 'userKristina', password: '567'},
    {name: 'Nikola', username: 'userNikola', password: '678'},
    {name: 'Tom', username: 'userTom', password: '789'},
    {name: 'Johnny', username: 'userJohnny', password: '890'},
    {name: 'Kira', username: 'userKira', password: '901'},
    {name: 'Angelina', username: 'userAngelina', password: '012'},
];

console.log(arr2[0].password);
console.log(arr2[1].password);
console.log(arr2[2].password);
console.log(arr2[3].password);
console.log(arr2[4].password);
console.log(arr2[5].password);
console.log(arr2[6].password);
console.log(arr2[7].password);
console.log(arr2[8].password);
console.log(arr2[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 32;
if (time >= 0 && time < 15) {
    console.log('Перша чверть');
} else if (time >= 15 && time < 30) {
    console.log('Друга чверть');
} else if (time >= 30 && time < 45) {
    console.log('Третя чверть');
} else if (time >= 45 && time < 60) {
    console.log('Четверта чверть');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 17;
if (day >= 1 && day < 11) {
    console.log('Перша декада');
} else if (day >= 11 && day < 21) {
    console.log('Друга декада');
} else if (day >= 21 && day < 31) {
    console.log('Третя декада');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay = +prompt('Enter number of the week');
switch (weekDay){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Number is not in [1;7]');
}

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох.
//   Також потрібно врахувати коли введені рівні числа.
let firstNum = +prompt('Enter first number'),
    secondNum = +prompt('Enter second number');
if (firstNum > secondNum) {
    console.log(`Bigger is ${firstNum}`);
} else if (firstNum < secondNum) {
    console.log(`Bigger is ${secondNum}`);
} else {
    console.log('Numbers is same');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xx = null;
if (xx === null || xx === '' || xx === 0 || xx === undefined || xx === NaN) {
    xx = 'default';
    console.log(xx)
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title} - Супер`)
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title} - Супер`)
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title} - Супер`)
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title} - Супер`)
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title} - Супер`)
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title} - Супер`)
}
