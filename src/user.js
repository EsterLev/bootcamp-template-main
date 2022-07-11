let id;

let FirstName = "";
let LastName = "";
let Address = "";
let Phone = "";
let Email = "";
let Height = "";
let Weight = "";

printUser = document.querySelector('.ShowUser');

const usersList = {
    manager: {},
    users: {},
};

const searchURL = new URLSearchParams(location.search);
const userURL = parseInt(searchURL.get('id'));
let currentUser = "";
theCurrentUser = () => {
    // usersList.users.forEach(u => {
        // if (u.id === userURL) {
            // currentUser = u;
            currentUser =  {
                "id": 1,
                "firstName": "Shira",
                "lastName": "Sharabani",
                "address": {
                    "city": "Modiin-Ilit",
                    "street": "Sd. Yechezkel",
                    "number": "18"
                },
                "phone": "0583281357",
                "email": "shirasharabani@gmail.com",
                "height": "1.70",
                "meeting": [
                    {
                        "date": "06-07-2022",
                        "weight": "60"
                    }
                ],
                "managerDaily": [
                    {
                        "meals": [
                            "בננה"
                        ],
                        "date": "06-07-2022",
                        "id": 1
                    },
                    {
                        "meals": [
                            "תפוח"
                        ],
                        "date": "06-07-2022",
                        "id": 2
                    }
                ]
            }
        // }
    // })
}
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
                    span.innerHTML = user.firstName + ' ' + user.lastName + ' ';
                    city.innerHTML = user.address.city + ' ';
                    street.innerHTML = user.address.street + ' ';
                    number.innerHTML = user.address.number + ' ';
                    address.append(city);
                    address.append(street);
                    address.append(number);
                    phonespan.innerHTML = 'phone: ' + user.phone + ' ';
                    emailspan.innerHTML = 'mail: ' + user.email + ' ';
                    div3.append(span);
                    div3.append(span2);
                    div3.append(address);
                    div3.append(phonespan);
                    div3.append(emailspan);
                    const h5 = document.createElement('h5');
                    h5.innerHTML = 'id:' + user.id + ' ';
                    div3.append(h5);
                    const h = document.createElement('h6');
                    h.innerHTML = 'weight' + user.weight[user.weight.length - 1] + ' ';
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

// getusersList();

const Edit = document.querySelector('#Edit');
const ShowEdit = document.getElementById('ShowEdit');
Edit.onclick = (e) => {
    ShowEdit.innerHTML = '';
    let table = '';
    theCurrentUser();
    e.preventDefault();
    table += `
    <tr>
        <th>first name: <input type="text" id="first" value=${currentUser.firstName}></input></th>
        <th>last name: <input type="text" id="last" value=${currentUser.lastName}></input></th>
        <th>city: <input type="text" id="city" value=${currentUser.address.city}></input></th>
        <th>street: <input type="text id="street" value=${currentUser.address.street}></input></th>
        <th>number: <input type="text" id="number" value=${currentUser.address.number}></input></th>
        <th>phone: <input type="text" id="phone" value=${currentUser.phone}></input></th>
        <th>email: <input type="text" id="mail" value=${currentUser.email}></input></th>
        <th>height: <input type="text" id="height" value=${currentUser.height}></input></th>
        <th><button type="submit" id="save" value="save changea">save changes</button></th>
    </tr>`
    // <th>weight: <input type="text" id="weight" value=${currentUser.weight[currentUser.weight.length - 1]}></input></th>
    ShowEdit.innerHTML += table;
    const btnSave = document.getElementById('save');
    const firstname = document.getElementById('first');
    const lastname = document.getElementById('last');
    const city = document.getElementById('city');
    const street = document.getElementById('street');
    const number = document.getElementById('number');
    const phone = document.getElementById('phone');
    const mail = document.getElementById('mail');
    const height = document.getElementById('height');
    const weight = document.getElementById('weight');

    btnSave.onclick = () => {
        currentUser.firstName = firstname.value;
        currentUser.lastName = lastname.value;
        currentUser.address.city = city.value;
        //currentUser.address.street = street.value;
        currentUser.address.number = number.value;
        currentUser.phone = phone.value;
        currentUser.mail = mail.value;
        currentUser.height = height.value;
        // currentUser.weight = weight.value;
        console.log(currentUser)
        fetch(`http://localhost:3000/users/${userURL}`, {
            method: `PATCH`,
            // Sending only the fields that to be updated
            body: JSON.stringify({
                "firstName": currentUser.firstName,
                "lastName": currentUser.lastName,
                "address.city": currentUser.address.city,
                "address.street": currentUser.address.street,
                "address.number": currentUser.address.number,
                "phone": currentUser.phone,
                "email": currentUser.email,
                "height": currentUser.height,
                "weight": currentUser.weight
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
            .then(response => console.log(response));
    }
}