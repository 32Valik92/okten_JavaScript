// ВСЕ ЗРОБИТИ ARROW FUNCTION!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами a і b
let squareRectangle = (width, height) => width * height;

console.log(`Площа прямокутника = ${squareRectangle(3, 10)}`);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let squareRound = (radius) => Math.PI * Math.pow(radius, 2);

console.log(`Площа кола = ${squareRound(7)}`);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
let volumeCylinder = (height, radius) => squareRound(radius) * height;

console.log(`Об'єм циліндра = ${volumeCylinder(100, 2)}`);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент
let fourthArray1 = [1, 2, 3, 4, 5, 'qqq', 'www', true];

let showFourthArray = (array) => {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

showFourthArray(fourthArray1);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createP = (paragraph) => document.write(`<p>${paragraph}</p>`);

createP("It's our paragraph");
document.write(`<hr>`);

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ul3Li = (textLi) => {
    document.write(`<ul>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`</ul>`);

}

ul3Li('Text for UL and 3 li');
document.write(`<hr>`);

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulCountLi = (textLi, count) => {
    document.write(`<ul>`);
    for (let i = 1; i <= count; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);

}

ulCountLi('Text for List', 10);
document.write(`<hr>`);

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let ulArray = (array) => {
    document.write(`<ul>`);
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

ulArray(fourthArray1);
document.write(`<hr>`);

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
let fourthArray2 = [
    {id: 1, name: 'qqq', age: 11},
    {id: 2, name: 'www', age: 22},
    {id: 3, name: 'eee', age: 33},
    {id: 4, name: 'rrr', age: 44},
    {id: 5, name: 'ttt', age: 55},
    {id: 6, name: 'yyy', age: 66},
    {id: 7, name: 'uuu', age: 77}
]

let showObject = (object) => {
    for (let arrayElement of object) {
        document.write(`<div class="showObject">`);
        for (let objectElement in arrayElement) {
            document.write(`${objectElement}: ${arrayElement[objectElement]} <br>`);
        }
        document.write(`</div><br>`);
    }
}

showObject(fourthArray2);
document.write(`<hr>`);

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву
let fourthArray3 = [1, 23, -434, 54, 212, 23, 34, 55, 33, 2, 52];

let minNumber = (array) => {
    let minimal = array[0];
    for (let arrayElement of array) {
        if (arrayElement <= minimal) {
            minimal = arrayElement;
        }
    }
    console.log(`Мінімальний елемент масиву = ${minimal}`);
}

minNumber(fourthArray3);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement
    }
    console.log(`Сума елементів масиву = ${sum}`);
}

sum(fourthArray3);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
let swap = (arr, index1, index2) => {
    console.log(`Масив до перестановки: ${arr}`);
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    console.log(`Масив після перестановки: ${arr}`);
}

swap(fourthArray3, 0, 1);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency) {
            console.log(`Yor ${sumUAH} UAH changed to ${sumUAH / currencyValue.value} ${exchangeCurrency}`);
        }
    }
}

exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
console.log('');
