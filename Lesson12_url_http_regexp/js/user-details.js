// Дістаємо наше посилання та id
let pageLocation = new URL(location.href),
    id = pageLocation.searchParams.get('id');

function renderInfo(objectUser, fatherElement) {
    let ul = document.createElement('ul');
    fatherElement.appendChild(ul);

    for (let key in objectUser) {
        let li = document.createElement('li'),
            p = document.createElement('p'); // Тег "р" мені треба тільки для стилів
        ul.appendChild(li);

        if (typeof objectUser[key] === 'object') { // Якщо наш об'єкт є вкладеним
            li.innerText = `${key}:`;
            renderInfo(objectUser[key], li); // Рекурсія
        } else {
            p.innerText = `${key}: ${objectUser[key]}`;
            li.appendChild(p);
        }


    }
}

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(user => user.json())
    .then(user => {
        let div = document.createElement('div');
        document.body.appendChild(div); // Контейнер для списку
        renderInfo(user, div);

    });

