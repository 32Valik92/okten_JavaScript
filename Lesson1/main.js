// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false. Вивести кожну змінну за допомогою: console.log

let str1 = 'hello',
    str2 = 'owu',
    str3 = 'ua',
    num1 = 1,
    num2 = 10,
    num3 = -999,
    num4 = 123,
    num5 = 3.14,
    num6 = 2.7,
    num7 = 16,
    bool1 = true,
    bool2 = false;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bool1);
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Valentyn',
    middleName = 'Volodymyrovich',
    lastName = 'Strukalo';

let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль. let a = 100; let b = '100'; let c = true;

let a = 100,
    b = '100',
    c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let nameFirst = prompt('What is your first Name?'),
    nameSecond = prompt('What is your second Name?'),
    age = prompt('What is your age?');

console.log(`You are ${nameFirst} ${nameSecond} and his age is ${age}.`);
