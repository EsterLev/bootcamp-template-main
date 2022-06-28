const loginBtn = document.querySelector('#enter');
const loginInput = document.querySelector('#login');

const usersList = {
    manager: {},
    users: {},
};

//get the data from the json file
const getusersList = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", './users.json');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            usersList.users = JSON.parse(xhr.responseText).users;
            usersList.manager = JSON.parse(xhr.responseText).manager;
            console.log(usersList.manager);
        }
    }
};

getusersList();

loginBtn.onclick = () => {
    id = loginInput.value;
    if (usersList.manager.id === parseInt(id)) {
        location.href = `./manager.html`
    }

    else (usersList.users.forEach(u => {
        if (u.id === parseInt(id)) {
            //צריך לשרשר פה את ה ID
            //   location.href = "../user.html?id=${user.id}"+${user.firstName + ' ' + user.lastName}
            table += `
        <tr>
            <th><a href="../user.html?id=${user.id}">${user.firstName + ' ' + user.lastName}</a></th>
            <th style="color:${color}" >${bmi}</th>
        </tr>`
        }
    }))
}
