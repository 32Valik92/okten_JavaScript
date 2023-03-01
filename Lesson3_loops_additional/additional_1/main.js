// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
console.log('---------------Part 1---------------');
let firstArray1 = [1, 2, 3, 4, 5],
    firstArray2 = ['one', 'two', 'three', 'four', 'five'],
    firstArray3 = ['first', 'second', 11, 22, true];

console.log(firstArray1);
console.log('');
console.log(firstArray2);
console.log('');
console.log(firstArray3);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

console.log('---------------Part 2---------------');
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let secondArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// 1. перебрати його циклом while
console.log('1. перебрати його циклом while');
let i = 0;
while (i < secondArray.length) {
    console.log(secondArray[i]);
    i++;
}
console.log('');

// 2. перебрати його циклом for
console.log('2. перебрати його циклом for');
for (let i = 0; i < secondArray.length; i++) {
    console.log(secondArray[i]);
}
console.log('');

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
console.log('3. перебрати циклом while та вивести числа тільки з непарним індексом');
i = 0;
while (i < secondArray.length) {
    if (i % 2 !== 0) {
        console.log(secondArray[i]);
    }
    i++;
}
console.log('');

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
console.log('4. перебрати циклом for та вивести числа тільки з непарним індексом');
for (let i = 0; i < secondArray.length; i++) {
    if (i % 2 !== 0) {
        console.log(secondArray[i]);
    }
}
console.log('');

// 5. перебрати циклом while та вивести числа тільки парні значення
console.log('5. перебрати циклом while та вивести числа тільки парні значення');
i = 0;
while (i < secondArray.length) {
    if (secondArray[i] % 2 === 0) {
        console.log(secondArray[i]);
    }
    i++;
}
console.log('');

// 6. перебрати циклом for та вивести числа тільки парні значення
console.log('6. перебрати циклом for та вивести числа тільки парні значення');
for (let i = 0; i < secondArray.length; i++) {
    if (secondArray[i] % 2 === 0) {
        console.log(secondArray[i]);
    }
}
console.log('');

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('7. замінити кожне число кратне 3 на слово "okten"');
for (let i = 0; i < secondArray.length; i++) {
    if (secondArray[i] % 3 === 0) {
        secondArray[i] = 'okten';
    }
    console.log(secondArray[i]);
}
console.log('');

// 8. вивести масив у зворотньому порядку.
console.log('8. вивести масив у зворотньому порядку.');
for (let i = secondArray.length; i >= 0; i--) {
    console.log(secondArray[i]);
}
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

console.log('---------------Part 3---------------');
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');
let thirdArrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < thirdArrayNumber.length; i++) {
    console.log(thirdArrayNumber[i]);
}
console.log('');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.');
let thirdArrayString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (let i = 0; i < thirdArrayString.length; i++) {
    console.log(thirdArrayString[i]);
}
console.log('');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.');
let thirdArrayAnybody = [11, 'AAA', 43, 55, 22, true, false, false, 'www', 'ttt'];
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('Тільки булеві елементи');
for (let i = 0; i < thirdArrayAnybody.length; i++){
    if (typeof thirdArrayAnybody[i] == 'boolean'){
        console.log(thirdArrayAnybody[i]);
    }
}

console.log('Тільки числові елементи')
for (let i = 0; i < thirdArrayAnybody.length; i++){
    if (typeof thirdArrayAnybody[i] == 'number'){
        console.log(thirdArrayAnybody[i]);
    }
}

console.log('Тільки рядкові елементи')
for (let i = 0; i < thirdArrayAnybody.length; i++){
    if (typeof thirdArrayAnybody[i] == 'string'){
        console.log(thirdArrayAnybody[i]);
    }
}
console.log('')

// ---------------------------------------------------------------------------------------------------------------------

console.log('---------------Part 4---------------');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}
