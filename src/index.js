ShowUser = (user) => {
    if (user != null) {
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
        div.append(div2);
        div.append(div4);
        this.printUser.append(div);
    }
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
                console.log(user);
                table += `
             <tr>
                 <th>${user.user.firstName + ' ' + user.user.lastName}</th>
                 <th>${user.user.weight[user.user.weight.length - 1] / Math.sqrt(user.user.height)}</th><br/>
                 <th><button type="submit" id="moreDetails">more details</button></th>
             </tr>`
             const moreDetails = document.getElementById('moreDetails');
             moreDetails.onclick=()=>{
                 theCurrentUser(user.id);
             }
            })
           
            const container = document.querySelector('.ShowUser');
            container.innerHTML += table;
        }
    }
};

let currentUser = "";
theCurrentUser = (id) => {
    usersList.users.forEach(u => {
        if (u.id === id) {
            currentUser = u;
            console.log(currentUser);
        }
    })
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
            <th><input type="text id="street" value="enter street"></input></th>
            <th><input type="text" id="number" value="enter number"></input></th>
            <th><input type="text" id="phone" value="enter phone number"></input></th>
            <th><input type="text" id="mail" value="enter mail address"></input></th>
            <th><input type="text" id="height" value="enter height"></input></th>
            <th><button type="submit" id="save" value="save changea">save changes</button></th>
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

    btnSave.onclick = () => {
        console.log(currentUser);
        currentUser.firstName = firstname.value;
        currentUser.lastName = lastname.value;
        currentUser.address.city = city.value;
        //currentUser.address.street = street.value;
        currentUser.address.number = number.value;
        currentUser.phone = phone.value;
        currentUser.mail = mail.value;
        currentUser.height = height.value;
        console.log(currentUser)
        fetch(`http://localhost:3000/users/${currentUser.id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",

            // Sending only the fields that to be updated
            body: JSON.stringify({
                user: currentUser
            })
        })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            });
    }
}

u = false;
ShowFilterUsers = (user) => {
    if (this.filterUsers.length !== 0) {
        this.filterUsers.foreach(us => {
            if (us.id === user.id)
                u = true;
        });
        if (u === false)
            this.filterUsers.push(user);
    }
    else {
        this.filterUsers.push(user);
    }
}

printUsersFilter = () => {
    const container = document.querySelector('.ShowUser');
    container.innerHTML = '';
    let table = '';
    this.filterUsers.forEach(user => {
        console.log(user);
        table += `
         <tr>
             <th>${user.firstName + ' ' + user.lastName}</th>
             <th>${user.weight[usersList.users.length - 1] / Math.sqrt(user.height)}</th><br/>
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
             <th>${user.weight[usersList.users.length - 1] / Math.sqrt(user.height)}</th><br/>
         </tr>`
    })
    const container = document.querySelector('.ShowUser');
    container.innerHTML += table;
}

Search = (val) => {
    if (this.filterUsers.length !== 0) {
        this.filterUsers.forEach(user => {
            if (user.firstName === val) {
                console.log(user);
                //newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.lastName === val) {
                //    newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.email === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.phone === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.address.city === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.address.street === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.address.number === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.address === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
        }
        )
    }
    else {
        usersList.users.forEach(user => {
            if (user.firstName === val) {
                console.log(user);
                //newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.lastName === val) {
                //    newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.email === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.phone === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.address.city === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.address.street === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.address.number === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
            if (user.address === val) {
                // newUser = new User(user.firstName, user.lastName, user.city, user.street, user.number, user.phone, user.email, user.height, user.weight);
                this.ShowFilterUsers(user);
            }
        }
        )
    }
    this.printUsersFilter();
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
const usersList = {
    manager: {},
    users: {},
};

getusersList();


showUserById.onclick = () => {
    let id = idShow.value;
    usersList.users.forEach(user => {
        if (user.id === parseInt(id)) {
            ShowUser(user);
        }
    })
}

searchBtn.onclick = () => {
    if (id.checked)
        Search(parseInt(idSearch.value));
    if (firstName.checked)
        Search(firstNameSearch.value);
    if (lastName.checked)
        Search(lastNameSearch.value);
    if (address.checked) {
        if (citySearch.value)
            Search(citySearch.value);
        if (streetSearch.value)
            Search(streetSearch);
        if (numberSearch.value)
            Search(numberSearch.value);
    }
}

btnAdd.onclick = ()=>{
    AddUser();
}



