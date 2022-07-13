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

//get the users from the json file
const getusersList = () => {
    fetch(`http://localhost:5000/users`)
        .then(response => {
            // usersList.users = JSON.parse(xhr.responseText).users;
            // usersList.manager = JSON.parse(xhr.responseText).manager;
            let table = '';
            let num = 0;
            usersList.users.forEach(user => {
                console.log(user);
                table += `
             <tr>
                 <th>${user.user.firstName + ' ' + user.user.lastName}</th>
                 <th>${user.user.weight[user.user.weight.length - 1] / Math.sqrt(user.user.height)}</th><br/>
                 <th><button type="submit" id="moreDetails">more details</button></th>
             </tr>`
            //  const moreDetails = document.getElementById('moreDetails');
            //  moreDetails.onclick=()=>{
            //      theCurrentUser(user.id);
            //  }
            })
           
        
            const container = document.querySelector('.ShowUser');
            container.innerHTML += table;
        })
    }
}

let currentUser = "";
theCurrentUser = (id) => {
    usersList.users.forEach(u => {
        if (u.id === id) {
            currentUser = u;
            console.log("the current" + currentUser);
        }
    })

}

getusersList();

//let currentUser = "";
theCurrentUser = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`,
        { method: 'GET' })
    const user = await response.json();
    currentUser = user[0];
}

filterUsers = new Array();

//pushing to the user to the array
AddUser = (user) => {
    return usersList.push(user);


}
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

    btnSave.onclick = () => {
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

//show the filter users results

        currentUser.weight = new Array();
        currentUser.weight.push(weight.value);
        currentUser.id = usersList.users.length + 1;
        currentUser.weight = weight.value;
        console.log(currentUser)
        fetch(`http://localhost:3000/users/`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",

            // Sending only the fields that to be updated
            body: JSON.stringify({
                user: currentUser.user
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
    filterUsers.forEach(user => {
        console.log(user);
        table += `
         <tr>
             <th>${user.firstName + ' ' + user.lastName}</th>
         </tr>`
    })
    container.innerHTML += table;
}

//<th>${user.weight[usersList.users.length - 1] / Math.sqrt(user.height)}</th><br/>

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

deleteUser=(id)=>{
    console.log("before deleting")
    console.log(usersList.users)
    usersList.users.forEach(d=>{
        if(d.id==id){
            fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' })
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
const usersList = {
    manager: {},
    users: {},
};

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

//add user

btnAdd.onclick = ()=>{
    AddUser();
}

btnDelete.onclick = (id)=>{
    deleteUser(id)
}

//update user
//delete user
//show user by id
//search

