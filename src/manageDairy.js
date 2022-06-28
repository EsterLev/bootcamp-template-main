const numOfFoods = document.getElementById('num');
const btnEdit = document.getElementById('btnEdit');
const addFoods = document.querySelector('.addFoods');
const btnSave = document.getElementById('btnSave');

const searchURL = new URLSearchParams(location.search);
const userURL = parseInt(searchURL.get('id'));

const getJson = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", './users.json');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            usersList.users = JSON.parse(xhr.responseText).users;
            usersList.manager = JSON.parse(xhr.responseText).manager;
        }
    }
}
getJson();

const usersList = {
    manager: {},
    users: {},
};

const daily = new Array();
btnEdit.onclick = (e) => {
    const div = document.createElement('div');
    const desc = document.createElement('span');
    desc.innerHTML = "what you eat? give a description";
    const inputDesc = document.createElement('input');
    inputDesc.type = "text";
    inputDesc.id = "valueDesc";
    div.append(desc);
    div.append(inputDesc);
    addFoods.append(div);
    inputDesc.onchange = () => {
        daily.push(inputDesc.value);
    }
}

btnSave.onclick = () => {
    usersList.users.forEach(user => {
        if (user.id === userURL)
            user.managerDaily = daily;
    });
}


