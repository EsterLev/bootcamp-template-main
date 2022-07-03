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
    if (id === undefined)
        alert("you not enter anything");
    let flag = 0;
    if (usersList.manager.id === parseInt(id)) {
        flag = 1;
        window.location.href = './manager.html';
    }
    else (usersList.users.forEach(u => {
        if (u.user.id === parseInt(id)) {
            //צריך לשרשר פה את ה ID
            flag = 1;
            window.location.href = './user.html?id=' + `${u.user.id}`;
        }
        if (flag === 0) {
            alert("not found try again");
        }
    }))
}