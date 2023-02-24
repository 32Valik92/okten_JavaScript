// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//   створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log('Створити функцію конструктор для об\'єктів User:');

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrUsers = [
    new User(1, 'qqq', 'QQQ', 'qqq@gmail.com', '0991111111'),
    new User(2, 'www', 'WWW', 'www@gmail.com', '0992222222'),
    new User(10, 'eee', 'EEE', 'eee@gmail.com', '0993333333'),
    new User(9, 'ttt', 'TTT', 'ttt@gmail.com', '0994444444'),
    new User(8, 'aaa', 'AAA', 'aaa@gmail.com', '0995555555'),
    new User(6, 'sss', 'SSS', 'sss@gmail.com', '0996666666'),
    new User(3, 'ddd', 'DDD', 'ddd@gmail.com', '0997777777'),
    new User(5, 'xxx', 'XXX', 'xxx@gmail.com', '0998888888'),
    new User(4, 'ccc', 'CCC', 'ccc@gmail.com', '0999999999'),
    new User(7, 'vvv', 'VVV', 'vvv@gmail.com', '0990000000')
];
console.log(arrUsers);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
console.log('Взяти масив з User[] та відфільтрувати, залишивши тільки об\'єкти з парними id:');
let evenIdUsers = arrUsers.filter(user => user.id % 2 === 0);
console.log(evenIdUsers);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('Взяти масив з User[] та відсортувати його по id по зростанню:');
let arrSortIdUser = arrUsers.sort((user1, user2) => user1.id - user2.id);
console.log(arrSortIdUser);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//   створити пустий масив, наповнити його 10 об'єктами Client
console.log('Cтворити клас для об\'єктів Client:');
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClients = [
    new Client(1, 'qqq', 'QQQ', 'qqq@gmail.com', '0991111111', ['bacon']),
    new Client(2, 'www', 'WWW', 'www@gmail.com', '0992222222', ['duck', 'lamb']),
    new Client(10, 'eee', 'EEE', 'eee@gmail.com', '0993333333', ['liver', 'meat', 'mutton']),
    new Client(9, 'ttt', 'TTT', 'ttt@gmail.com', '0994444444', ['duck', 'ham', 'lamb']),
    new Client(8, 'aaa', 'AAA', 'aaa@gmail.com', '0995555555', ['liver', 'meat', 'mutton', 'liver', 'liver']),
    new Client(6, 'sss', 'SSS', 'sss@gmail.com', '0996666666', ['duck', 'ham', 'lamb', 'chicken']),
    new Client(3, 'ddd', 'DDD', 'ddd@gmail.com', '0997777777', ['bacon']),
    new Client(5, 'xxx', 'XXX', 'xxx@gmail.com', '0998888888', ['liver', 'meat', 'mutton']),
    new Client(4, 'ccc', 'CCC', 'ccc@gmail.com', '0999999999', ['bacon', 'beef', 'chicken', 'chicken', 'chicken', 'chicken']),
    new Client(7, 'vvv', 'VVV', 'vvv@gmail.com', '0990000000', ['duck', 'ham', 'lamb'])
];

console.log(arrClients);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
let arrSortOrderLen = arrClients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(arrSortOrderLen);
console.log('');

// ---------------------------------------------------------------------------------------------------------------------


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(('Завдання з функціэю конструктор Car:').toUpperCase());

function FunctionCar(model, maker, yearOfRelease, maxSpeed, volumeMotor) {
    this.model = model;
    this.maker = maker;
    this.yearOfRelease = yearOfRelease;
    this.maxSpeed = maxSpeed;
    this.volumeMotor = volumeMotor;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`);
    };

    // Будемо виводити через цил, бо полів з інформацією може бути багато
    this.info = function () {
        let infoStr = '';
        for (let thisKey in this) {
            // Відкинемо наші методи
            if (typeof this[thisKey] !== 'function') {
                infoStr += `${thisKey} — ${this[thisKey]}; `
            }
        }

        infoStr = infoStr.substring(0, infoStr.length - 2) + '!'; // обрізаю останній пробіл та ";" і додаю "."
        console.log(`Метод info() => ${infoStr}`);
        return infoStr;
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Метод increaseMaxSpeed() => Нова максимальна швидкість ${this.maxSpeed}`);
        return this.maxSpeed;
    };

    this.changeYear = function (newValue) {
        this.yearOfRelease = newValue;
        console.log(`Метод changeYear => Рік змінено на ${this.yearOfRelease}`);
        return this.yearOfRelease;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Метод addDriver => `, driver);
        return this.driver;
    };
}


let userFunctionCar = new FunctionCar('BMW', 'Germany', 2011, 320, 2.5);

userFunctionCar.drive();
let info0 = userFunctionCar.info(),
    increaseMaxSpeed0 = userFunctionCar.increaseMaxSpeed(3),
    changeYear0 = userFunctionCar.changeYear(2000),
    addDriver0 = userFunctionCar.addDriver({name: 'Kate', age: 33, country: 'Germany'});
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(('Завдання з класом, який дозволяє створювати об\'єкти car:').toUpperCase());

class ClassCar {
    constructor(model, maker, yearOfRelease, maxSpeed, volumeMotor) {
        this.model = model;
        this.maker = maker;
        this.yearOfRelease = yearOfRelease;
        this.maxSpeed = maxSpeed;
        this.volumeMotor = volumeMotor;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`);
    };

    // Будемо виводити через цил, бо полів з інформацією може бути багато
    info() {
        let infoStr = '';
        for (let thisKey in this) {
            // Відкинемо наші методи
            if (typeof this[thisKey] !== 'function') {
                infoStr += `${thisKey} — ${this[thisKey]}; `
            }
        }

        infoStr = infoStr.substring(0, infoStr.length - 2) + '!'; // обрізаю останній пробіл та ";" і додаю "."
        console.log(`Метод info() => ${infoStr}`);
        return infoStr;
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Метод increaseMaxSpeed() => Нова максимальна швидкість ${this.maxSpeed}`);
        return this.maxSpeed;
    };

    changeYear(newValue) {
        this.yearOfRelease = newValue;
        console.log(`Метод changeYear => Рік змінено на ${this.yearOfRelease}`);
        return this.yearOfRelease;
    };

    addDriver(driver) {
        this.driver = driver;
        console.log(`Метод addDriver => `, driver);
        return this.driver;
    };
}

let userClassCar = new ClassCar('Reno', 'France', 2007, 210, 2.0);

userClassCar.drive();
let info1 = userClassCar.info(),
    increaseMaxSpeed1 = userClassCar.increaseMaxSpeed(3),
    changeYear1 = userClassCar.changeYear(2000),
    addDriver1 = userClassCar.addDriver({name: 'Johnny', age: 20, country: 'USA'});
console.log('');

// ---------------------------------------------------------------------------------------------------------------------

// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, sizeFoot) {
    this.name = name;
    this.age = age;
    this.sizeFoot = sizeFoot;
}

let arrayCinderellas = [
    new Cinderella('Sophia', 22, 31),
    new Cinderella('Emily', 23, 32),
    new Cinderella('Mary', 24, 33),
    new Cinderella('Linda', 25, 34),
    new Cinderella('Madison', 26, 35),
    new Cinderella('Susan', 27, 36),
    new Cinderella('Lily', 28, 37),
    new Cinderella('Michelle', 29, 38),
    new Cinderella('Margaret', 30, 39),
    new Cinderella('Tracy', 31, 40)
];

//     Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince(name, age, sizeFootFound) {
    this.name = name;
    this.age = age;
    this.sizeFootFound = sizeFootFound;
}

let prince = new Prince('Artur', 36, 33);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let arrayCinderella of arrayCinderellas) {
    if (arrayCinderella.sizeFoot === prince.sizeFootFound) {
        console.log(`${prince.name} повинен бути з ${arrayCinderella.name}!`);
        break;
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(`Ми шукали ${arrayCinderellas.find(value => value.age === 28).name}!`);