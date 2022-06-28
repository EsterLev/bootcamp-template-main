let firstName;
let lastName;
let city;
let street;
let number;
let phone;
let email;
let height;
let weight;
let id;

printUser = document.querySelector('.ShowUser');

const usersList = {
    manager: {},
    users: {},
};

const searchURL = new URLSearchParams(location.search);
const userURL = parseInt(searchURL.get('id'));

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
            let table = '';
            usersList.users.forEach(user => {
                if (user.id === userURL) {
                    const div = document.createElement('div');
                    div.classList.add('user');
                    div.classList.add('divUser');
                    const div2 = document.createElement('div');
                    const div3 = document.createElement('div');
                    const span = document.createElement('span');
                    const address = document.createElement('span');
                    const city = document.createElement('span');
                    const street = document.createElement('span');
                    const number = document.createElement('span');
                    const span2 = document.createElement('span');
                    const phonespan = document.createElement('span');
                    const emailspan = document.createElement('span');
                    span.innerHTML = user.firstName + ' ' + user.lastName;
                    city.innerHTML = user.address.city;
                    street.innerHTML = user.address.street;
                    number.innerHTML = user.address.number;
                    address.append(city);
                    address.append(street);
                    address.append(number);
                    phonespan.innerHTML = user.phone;
                    emailspan.innerHTML = user.email;
                    div3.append(span);
                    div3.append(span2);
                    div3.append(address);
                    div3.append(phonespan);
                    div3.append(emailspan);
                    const h5 = document.createElement('h5');
                    h5.innerHTML = 'id:' + user.id;
                    div3.append(h5);
                    const h = document.createElement('h6');
                    h.innerHTML = 'weight' + user.weight[user.weight.length - 1];
                    div3.append(h);
                    div2.append(div3);
                    const div4 = document.createElement('div');
                    a = document.createElement('a');
                    a.innerHTML = 'to manage a diary';
                    a.href = 'manageDairy.html?id=' + `${user.id}`;
                    div.append(a);
                    div.append(div2);
                    div.append(div4);
                    printUser.append(div);
                }
            })
        }
    }
};

getusersList();


