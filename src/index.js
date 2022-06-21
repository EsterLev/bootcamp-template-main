//const showUser = document.querySelector('.ShowUser');
class User {

    printUser = document.querySelector('.ShowUser');

    #UserName;
    #UserWeight;
    #id;
    static Id = 0;
    //function
    //GET and SET
    //for the private variables
    set setUserName(userName) {
        this.#UserName = userName;
    }
    get getUserName() {
        return this.#UserName;
    }
    set setUserWeight(UserWeight) {
        this.#UserWeight = UserWeight;
    }
    get getUserWeight() {
        return this.#UserWeight;
    }

    get getId() {
        return this.#id;
    }

    constructor(userName, UserWeight) {
        this.#UserName = userName;
        this.#id = ++this.Id;
        this.#UserWeight = UserWeight;
    };

    ShowUser = (user) => {
        if (user != null) {
            const div = document.createElement('div');
            div.classList.add('user');
            div.classList.add('divUser');
            const div2 = document.createElement('div');
            const div3 = document.createElement('div');
            const span = document.createElement('span');
            span.innerHTML = user.firstName+ ' '+user.lastName;
            div3.append(span);
            const h5 = document.createElement('h5');
            h5.innerHTML = 'id:' + user.id;
            div3.append(h5);
            const h = document.createElement('h6');
            h.innerHTML = 'weight' + user.weight[user.weight.length-1];
            div3.append(h);
            div2.append(div3);
            const div4 = document.createElement('div');
            div.append(div2);
            div.append(div4);
            this.printUser.append(div);
        }
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
            let table = '';
            usersList.users.forEach(user => {
                console.log(user);
                table += `
             <tr>
                 <th>${user.firstName + ' ' + user.lastName}</th>
                 <th>${user.weight[usersList.users.length - 1] / Math.sqrt(user.height)}</th></br>
             </tr>`
            })
            const container = document.querySelector('.ShowUser');
            container.innerHTML += table;
        }
    }
};

class Manager {

    //ShowProducts = document.querySelector('.ShowProducts');

    #usersList;

    constructor() {
        this.#usersList = new Array();
    };
    set setusersList(usersList) {
        this.#usersList = usersList;
    }
    get getusersList() {
        return this.#usersList;
    }

    // SearchUserById(id){
    //     usersList.users = d;
    //     d = d.users.filter(fn => fn.id);
    //     showUserById.innerHTML = usersList.users.getId;
    // }
    //pushing to the products id
    AddUser(user) {
        return usersList.push(user);
    }

    search(val){
        search = document.querySelector("#search");
        searchBtn = document.querySelector("#searchBtn");
        usersList.users.forEach(user => {
            console.log(user);
            if (user.firstName === val) {
                newUser = new User(user.firstName, user.lastName);
                newUser.ShowUser(user);
            }
            if (user.lastName === val) {
                newUser = new User(user.firstName, user.lastName);
                newUser.ShowUser(user);
            }
            if (user.email === val) {
                newUser = new User(user.firstName, user.lastName,user.email);
                newUser.ShowUser(user);
            }
            if (user.phone === val) {
                newUser = new User(user.firstName, user.lastName,user.phone);
                newUser.ShowUser(user);
            }
            if (user.address.city === val) {
                newUser = new User(user.firstName, user.lastName,user.address);
                newUser.ShowUser(user);
            }
            if (user.address.street === val) {
                newUser = new User(user.firstName, user.lastName,user.address);
                newUser.ShowUser(user);
            }
            
        })
    }

 
}

const btnAdd = document.querySelector('#btnAdd');
const btnDelete = document.querySelector('#btnDelete');
const btnUpdate = document.querySelector('#btnUpdate');
const UserName = document.querySelector("#UserName");
const UserWeight = document.querySelector('#UserWeight');
const showUserById = document.querySelector('#showUserById');
const idShow = document.querySelector('#idShow');
const showAll = document.querySelector('#showAllUsers')

//keeps the data in a global variable
const usersList = {
    users: {},
};

getusersList();


// showAll.onclick = () => {
//     // d=usersList.users
//     // showAllUsersFromUser= d.map(u=>u.ShowUser());
//     console.log("enter to showAll onclick")
// }

btnAdd.onclick = () => {
    console.log("dfehu")
    u = new User(UserName.value, UserWeight.value);
    //m.AddUser(u);
    const Request = new XMLHttpRequest();
    Request.open('POST', './users.json', true);
    xhr.setRequestHeader('Content-type', u);
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
    };
    // xhr.send('user=person&pwd=password&organization=place&requiredkey=key');
    // Request.send();
    // Request.onload = () => {
    //     console.log("-------");
    //     req=Request.response
    //     console.log(req);
    // }
}

btnUpdate.onclick = () => {
    Id = document.querySelector('#id');
    const u = m.SearchIdUser(Id.value);
    u[0].setUserName = UserName.value;
    u[0].setUserWeight = UserWeight.value;
    console.log(u);
}


//on delete click
btnDelete.onclick = (id) => {
    for(let i=0; i<usersList.users.length;i++){
       console.log("id delete is working");
        if (user.id===parseInt(id)){
            delete usersList[i];
        } 
    }
    console.log("deleted succesfully!")
    console.log(usersList.users) 
}

showUserById.onclick = () => {
    id = idShow.value;
    usersList.users.forEach(user => {
        console.log(user);
        if (user.id === parseInt(id)) {
            newUser = new User(user.firstName, user.weight);
            newUser.ShowUser(user);
        }
    })
}

searchBtn.onclick =()=>{
    search();
}
