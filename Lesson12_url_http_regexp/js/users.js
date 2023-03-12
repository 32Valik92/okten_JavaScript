// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліці на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        let ul = document.createElement('ul');
        for (let user of users) {
            let li = document.createElement('li'),
                a = document.createElement('a');

            a.innerText = `Id - ${user.id} => Name - ${user.name}`;
            a.href = `user-details.html?id=${user.id}`;
            li.appendChild(a)

            ul.append(li);
            document.body.appendChild(ul);
        }
    });

