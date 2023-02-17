// - Знайти та вивести довжину наступних рядкових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrayStr1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
let strModification = (arrayStr, callback) => {
    for (let arrayStrElement of arrayStr) {
        callback(arrayStrElement);
    }
}

strModification(arrayStr1, function (arrayStrElement) {
    console.log(`Length of '${arrayStrElement}' = ${arrayStrElement.length}`);
})
console.log('');

// - Перевести до великого регістру наступні рядкові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
strModification(arrayStr1, function (arrayStrElement) {
    console.log(`${arrayStrElement} => ${arrayStrElement.toUpperCase()}`);
})
console.log('');

// - Перевести до нижнього регістру наступні рядкові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let arrayUpperStr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
strModification(arrayUpperStr, function (arrayStrElement) {
    console.log(`${arrayStrElement} => ${arrayStrElement.toLowerCase()}`);
});
console.log('');

// - Є "брудний" рядок let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
console.log(`Clear str = '${dirtyStr.trim()}'`);

console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    console.log(str.split(' '));
}

stringToArray(str);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на рядкові.
let arrayForMap = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map1 = arrayForMap.map((value) => {
    return `${value}`;
});
console.log(map1);
console.log('');
// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
//     sortNums(nums,'ascending') // [3,11,21]
//     sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

function sortNums(nums, direction) {
    let numsSorted;
    if (direction === 'ascending') {
        numsSorted = nums.sort((first, second) => {
            return first - second;
        });
        console.log(`Sorted in order of ascending: ${numsSorted}`);
    } else if (direction === 'descending') {
        numsSorted = nums.sort((first, second) => {
            return second - first;
        });
        console.log(`Sorted in order of descending: ${numsSorted}`);
    }
}

sortNums(nums, 'ascending');
sortNums(nums, 'descending');
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((first, second) => {
    return second.monthDuration - first.monthDuration;
});
console.log('Sort coursesAndDurationArray:');
console.log(coursesAndDurationArray);
console.log('');

// -- відфільтрувати, залишивши тільки курси з тривалістю більше ніж 5 місяців
let monthDurationFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log('Filter coursesAndDurationArray:');
console.log(monthDurationFilter);
console.log('');

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArrayMap = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value};
});
console.log('Type {id,title,monthDuration}');
console.log(coursesAndDurationArrayMap);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// описати колоду карт (від 6 до туза без джокерів)
let criterionObject = {
    cardSuits: ['heart', 'diamond', 'clubs', 'spade'],
    values: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
    colors: ['red', 'black']
}

let packOfCards = []; // Наша колода карт

// Формування колоди
for (let value of criterionObject.values) {
    for (let cardSuit of criterionObject.cardSuits) {
        if (cardSuit === 'heart' || cardSuit === 'diamond') {
            packOfCards.push({cardSuit: cardSuit, value: value, color: 'red'});
        } else if (cardSuit === 'clubs' || cardSuit === 'spade') {
            packOfCards.push({cardSuit: cardSuit, value: value, color: 'black'});
        }
    }
}
// console.log(packOfCards); // Демонстрація колоди

// Ф-ція для пошуку потрібних карт
function findWhatYouNeed(packOfCards, callback) {
    let cardsSearch = callback(packOfCards);
    console.log(cardsSearch);
}

// - знайти піковий туз
console.log('Знайти піковий туз:');
findWhatYouNeed(packOfCards, (packOfCards) => {
    return packOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
});
console.log('');
/*
other version ↓
let spadeAce = packOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
*/

//===================================

// - всі шістки
console.log('Всі шістки:');
findWhatYouNeed(packOfCards, (packOfCards) => {
    return packOfCards.filter(card => card.value === '6');
});
console.log('');
/*
other version ↓
let allSix = packOfCards.filter(card => card.value === '6');
*/

//===================================

// - всі червоні карти
console.log('Всі червоні карти:');
findWhatYouNeed(packOfCards, (packOfCards) => {
    return packOfCards.filter(card => card.color === 'red');
});
console.log('');
/*
other version ↓
let allRed = packOfCards.filter(card => card.color === 'red');
*/

//===================================

// - всі бубнові
console.log('Всі бубнові карти:');
findWhatYouNeed(packOfCards, (packOfCards) => {
    return packOfCards.filter(card => card.cardSuit === 'diamond');
});
console.log('');
/*
other version ↓
let allDiamond = packOfCards.filter(card => card.cardSuit === 'diamond');
*/

//===================================

// - всі хрестові від 9 та більше
console.log('Всі хрестові від 9 та більше карти:');
findWhatYouNeed(packOfCards, (packOfCards) => {
    return packOfCards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8');
});
console.log('');
/*
other version ↓
let some = packOfCards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8');
*/

// ---------------------------------------------------------------------------------------------------------------------

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {spades:[], diamonds:[], hearts:[], clubs:[]}

let reduceObject = packOfCards.reduce((accumulator, value) => {
    if (value.cardSuit === 'spade') {
        accumulator.spades.push(value);
    } else if (value.cardSuit === 'diamond') {
        accumulator.diamonds.push(value);
    } else if (value.cardSuit === 'heart') {
        accumulator.hearts.push(value);
    } else {
        accumulator.clubs.push(value);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log('Фасування по мастям:');
console.log(reduceObject);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


function filterObject(courses, belongCourse) {
    let resultArray = [];
    for (let course of courses) {
        if (course.modules.includes(belongCourse)) {
            resultArray.push(course);
        }
    }
    console.log(resultArray);
}

// --написати пошук всіх об'єктів, в який в modules є sass
console.log('Об\'єкти, в який в modules є sass:');
filterObject(coursesArray, 'sass');
console.log('');

// --написати пошук всіх об'єктів, в який в modules є docker
console.log('Об\'єкти, в який в modules є docker:');
filterObject(coursesArray, 'docker');
console.log('');