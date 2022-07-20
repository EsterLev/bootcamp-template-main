//get the users from the json file
const getusersList = async () => {
    // fetch(`http://localhost:5000/users`)
    //     .then(response => {
    // usersList.users = JSON.parse(xhr.responseText).users;
    // usersList.manager = JSON.parse(xhr.responseText).manager;
    const response = await fetch(`http://localhost:3000/users`,
        { method: 'GET' })
    const users = await response.json();
    usersList = users;

    let table = '';
    usersList.forEach(user => {
        let table = '';
        table += `
             <tr>
                 <th>${user.firstName + ' ' + user.lastName}</th>
                 <th>${user.meeting[user.meeting.length - 1].weight / Math.sqrt(user.height)}</th><br/>
             </tr>`
        //  <th><button type="submit" id="moreDetails" class="${num}">more details</button></th>
        const container = document.querySelector('.ShowUser');
        container.innerHTML += table;
        // const moreDetails = document.getElementById('moreDetails');
        // moreDetails.onclick = () => {
        //     usersList.users.forEach(u => {
        //         if (parseInt(moreDetails.className) === u.id)
        //             theCurrentUser(u.id);
        //     })
        //     window.location.href = './user.html?id=' + `${currentUser.id}`;
        // })
    })
}

getusersList();

let currentUser = "";
theCurrentUser = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`,
        { method: 'GET' })
    const user = await response.json();
    currentUser = user[0];
}

filterUsers = new Array();

const form = document.getElementById('form');

//pushing to the products id
AddUser = () => {
    form.innerHTML = '';
    let table = '';
    //e.preventDefault();
    table += `
        <tr>
            <th><input type="text" id="first" value="enter first name"></input></th>
            <th><input type="text" id="last" value="enter last name"></input></th>
            <th><input type="text" id="city" value="enter city"></input></th>
            <th><input type="number id="street" value="enter street"></input></th>
            <th><input type="text" id="number" value="enter number"></input></th>
            <th><input type="text" id="phone" value="enter phone number"></input></th>
            <th><input type="text" id="mail" value="enter mail address"></input></th>
            <th><input type="number" id="height" value="enter height"></input></th>
            <th><input type="number" id="weight" value="enter weight"></input></th>
            <th><button type="submit" id="save">save changea</button></th>
        </tr>`
    form.innerHTML += table;
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

    btnSave.onclick = async () => {
        currentUser = new Object();
        currentUser.firstName = firstname.value;
        currentUser.lastName = lastname.value;
        currentUser.address = new Object();
        currentUser.address.city = city.value;
        //currentUser.address.street = street.value;
        currentUser.address.number = number.value;
        currentUser.phone = phone.value;
        currentUser.mail = mail.value;
        currentUser.height = height.value;
        currentUser.id = usersList.length + 1;
        currentUser.weight = weight.value;
        console.log(currentUser)
        const res = await fetch(`http://localhost:3000/users`, {
            method: `POST`,
            body: JSON.stringify(currentUser),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        console.log(res.status);
        getusersList();
    }
}

printUsersFilter = () => {
    const container = document.querySelector('.ShowUser');
    container.innerHTML = '';
    let table = '';
    filterUsers.forEach(user => {
        console.log(user);
        table += `
         <tr>
             <th>${user.firstName + ' ' + user.lastName}</th>
         </tr>`
    })
    container.innerHTML += table;
}

printUsers = () => {
    let table = '';
    usersList.users.forEach(user => {
        console.log(user);
        table += `
         <tr>
             <th>${user.firstName + ' ' + user.lastName}</th>
             <th>${user.meeting[usersList.meeting.length - 1].weight / Math.sqrt(user.height)}</th><br/>
         </tr>`
    })
    const container = document.querySelector('.ShowUser');
    container.innerHTML += table;
}

deleteUser = (id) => {
    console.log("before deleting")
    console.log(usersList.users)
    usersList.users.forEach(d => {
        if (d.id == id) {
            fetch(`http://localhost:3000/users/${id}`,
                { method: 'DELETE' })
                .then(() => console.log('Delete successful'));
        }
    })
    console.log("after deleting")
    console.log(usersList.users)
}

const btnAdd = document.querySelector('#btnAdd');
const btnDelete = document.querySelector('#btnDelete');
const btnUpdate = document.querySelector('#btnUpdate');
const UserName = document.querySelector("#UserName");
const UserWeight = document.querySelector('#UserWeight');
const showUserById = document.querySelector('#showUserById');
const idShow = document.querySelector('#idShow');
const showAll = document.querySelector('#showAllUsers')
const searchBtn = document.querySelector("#searchBtn");

const firstNameSearch = document.querySelector('#firstNameSearch');
const firstName = document.querySelector('#firstName');
const idSearch = document.querySelector('#idSearch');
const id = document.querySelector('#id');
const lastNameSearch = document.querySelector('#lastNameSearch');
const lastName = document.querySelector('#lastName');
const address = document.querySelector('#address');
const citySearch = document.querySelector('#lastNameSearch');
const streetSearch = document.querySelector('#streetSearch');
const numberSearch = document.querySelector('#numberSearch');

//keeps the data in a global variable
let usersList;

showUserById.onclick = () => {
    let idUser = parseInt(idShow.value);
    usersList.users.forEach(u => {
        if (idUser === u.id)
            window.location.href = `./user.html?id=` + `${idUser}`;
    })
}

searchBtn.onclick = () => {
    if (id.checked) {
        fetch(`http://localhost:3000/users/${idSearch.value}`,
            { method: 'GET' })
            .then(() => console.log('get successful'));
    }
    if (firstName.checked) {
        fetch(`http://localhost:3000/users/${firstNameSearch.value}`,
            { method: 'GET' })
            .then(() => console.log('get successful'));
    }
    if (lastName.checked) {
        fetch(`http://localhost:3000/users/${lastNameSearch.value}`,
            { method: 'GET' })
            .then(() => console.log('get successful'));
    }
    if (address.checked) {
        if (citySearch.value) {
            fetch(`http://localhost:3000/users/${citySearch.value}`,
                { method: 'GET' })
                .then(() => console.log('get successful'));
        }
        if (streetSearch.value) {
            fetch(`http://localhost:3000/users/${streetSearch.value}`,
                { method: 'GET' })
                .then(() => console.log('get successful'));
        }
        if (numberSearch.value) {
            fetch(`http://localhost:3000/users/${numberSearch.value}`,
                { method: 'GET' })
                .then(() => console.log('get successful'));
        }

        this.printUsersFilter();
    }
}

//add user

btnAdd.onclick = () => {
    AddUser();
}

const idDelete = document.querySelector('#idDelete');

btnDelete.onclick = () => {
    let id = idDelete.value;
    console.log(id);
    deleteUser(parseInt(id));
}
