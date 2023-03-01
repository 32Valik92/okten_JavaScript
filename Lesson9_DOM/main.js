// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
let div1 = document.createElement('div');
div1.classList.add('wrap', 'collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.innerText = 'DOM = Document Object Model';
div1.style.background = 'silver';
div1.style.height = '150px';
div1.style.fontSize = '40px';
div1.style.display = 'flex';
div1.style.justifyContent = 'center';
div1.style.alignItems = 'center';
div1.style.marginBottom = '5px';

// - додати цей блок в body.
document.body.appendChild(div1);
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div1.cloneNode(true));

document.body.appendChild(document.createElement('hr'));

// ---------------------------------------------------------------------------------------------------------------------

// - Є масив:
let array1 = ['Main', 'Products', 'About us', 'Contacts'];

// Зробити ul в середині якої будуть лежати елементи масиву (кожен у своєму li)
let ulArray = document.createElement('ul');
for (let item of array1) {
    let li = document.createElement('li');
    li.innerText = item;
    ulArray.append(li);
}
document.body.appendChild(ulArray);
document.body.appendChild(document.createElement('hr'));

// ---------------------------------------------------------------------------------------------------------------------

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let div2 = document.createElement('div');
for (let object of coursesAndDurationArray) {
    let divObject = document.createElement('div');
    divObject.innerText = `title: ${object.title} -------- monthDuration: ${object.monthDuration}`;
    div2.append(divObject);
}

document.body.appendChild(div2);
document.body.appendChild(document.createElement('hr'));

// ---------------------------------------------------------------------------------------------------------------------

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скрипту для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
let div3 = document.createElement('div');
div3.classList.add('item');
for (let object of coursesAndDurationArray) {
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = object.title;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = object.monthDuration;

    div3.append(h1, p);
}

document.body.appendChild(div3);
document.body.appendChild(document.createElement('hr'));

// ---------------------------------------------------------------------------------------------------------------------

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створивши для кожного об'єкту масиву <div class='member'> та наповнити його даними з об'єкта.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let divSimpsons = document.createElement('div');
divSimpsons.classList.add('member');

for (let simpson of simpsons) {

    let person = document.createElement('div'),
        h2 = document.createElement('h2'),
        pAge = document.createElement('p'),
        pInfo = document.createElement('p'),
        image = document.createElement('img');

    h2.innerText = `${simpson.name} ${simpson.surname}`;
    pAge.innerText = `I'm ${simpson.age} years old`;
    pInfo.innerText = simpson.info;
    image.src = simpson.photo;

    person.append(h2, pAge, pInfo, image);
    divSimpsons.append(person);
}
document.body.appendChild(divSimpsons);
document.body.appendChild(document.createElement('hr'));

// ---------------------------------------------------------------------------------------------------------------------

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить у теці з поточним фйлом
let divCourses = document.createElement('div');
for (let course of coursesArray) {
    let divCourse = document.createElement('div'),
        title = document.createElement('h3'),
        divMonthAndHour = document.createElement('div'),
        divMonth = document.createElement('p'),
        divHour = document.createElement('p'),
        ulModules = document.createElement('ul');

    divCourse.style.border = '1px solid black';
    title.innerText = course.title;
    divMonthAndHour.style.display = 'flex';
    divMonth.innerText = `Кількість місяців - ${course.monthDuration}`;
    divHour.innerText = `Кількість годин - ${course.hourDuration}`;
    divHour.style.marginLeft = '20px'

    divMonthAndHour.append(divMonth, divHour);

    for (let module of course.modules) {
        let liModule = document.createElement('li');
        liModule.innerText = module;
        ulModules.append(liModule);
    }


    divCourse.append(title, divMonthAndHour, ulModules);
    divCourses.appendChild(divCourse);
}

document.body.appendChild(divCourses);
document.body.appendChild(document.createElement('hr'));

// ---------------------------------------------------------------------------------------------------------------------

// - Створити довільний елемент з id = "text" та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".
let divId = document.createElement('div'),
    button = document.createElement('button');
divId.setAttribute('id', 'text');
button.innerText = 'Прибрати квадрат';

divId.style.background = 'silver';
divId.style.height = '150px';
divId.style.width = '150px';
document.body.append(divId, button);

button.addEventListener('click', () => {
    divId.remove();
});
document.body.appendChild(document.createElement('hr'));

//---------------------------------------------------------------------------------------------------------------------

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньший він ніж 18, та повідомити про це користувача
let input = document.createElement('input');
input.setAttribute('type', 'number');
document.body.appendChild(input);

let buttonInput = document.createElement('button');
buttonInput.innerText = 'Перевірити вік';
document.body.appendChild(buttonInput);

buttonInput.addEventListener('click', () => {
    if (input.value >= 18) {
        alert('Ти повнолітній');
    } else if (input.value < 18 && input.value >= 1) {
        alert('Ти не повнолітній');
    } else {
        alert('Введи нормальний вік!');
    }
});
document.body.appendChild(document.createElement('hr'));

// ---------------------------------------------------------------------------------------------------------------------

// *** Створити 3 інпути та кнопку. Один визначає кількість рядків, другий - кількість комірок, третій вміст комірки.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let input1 = document.createElement('input'),
    input2 = document.createElement('input'),
    input3 = document.createElement('input'),
    buttonTable = document.createElement('button');
buttonTable.innerText = 'Побудувати таблицю';

input1.setAttribute('placeholder', 'Кількість рядків');
input1.setAttribute('type', 'number');
input2.setAttribute('placeholder', 'Кількість комірок');
input2.setAttribute('type', 'number');
input3.setAttribute('placeholder', 'Вміст комірок');

document.body.append(input1, input2, input3, buttonTable);

buttonTable.addEventListener('click', () => {
    table = document.createElement('table');
    for (let i = 1; i <= input1.value; i++) {
        tr = document.createElement('tr');
        for (let j = 1; j <= input2.value; j++) {
            td = document.createElement('td');
            td.style.border = '1px solid black';
            td.innerText = input3.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
});



