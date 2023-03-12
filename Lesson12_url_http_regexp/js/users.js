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

