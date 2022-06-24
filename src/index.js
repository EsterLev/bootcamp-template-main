//const showUser = document.querySelector('.ShowUser');

const loginBtn =document.querySelector('#enter')
const loginInput =document.querySelector('#login')

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
//shows single user
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
                 <th>${user.firstName + ' ' + user.lastName}</th>
                 <th>${user.weight[usersList.users.length - 1] / Math.sqrt(user.height)}</th><br/>
             </tr>`
            })
            const container = document.querySelector('.ShowUser');
            container.innerHTML += table;
        }
    }
};

class Manager {

    //ShowProducts = document.querySelector('.ShowProducts');
    #filterUsers;
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

    ShowFilterUsers(user) {
        u = this.#filterUsers.forEach(us => {
            // if (us === user) {
            //     break;
            // }
        })
        this.#filterUsers.push(user);
    }

    printUsers() {
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

    search(val) {
        search = document.querySelector("#search");
        searchBtn = document.querySelector("#searchBtn");
        usersList.users.forEach(user => {
            console.log(user);
            if (user.firstName === val) {
                newUser = new User(user.firstName, user.lastName);
                newUser.ShowFilterUsers(user);
            }
            if (user.lastName === val) {
                newUser = new User(user.firstName, user.lastName);
                newUser.ShowFilterUsers(user);
            }
            if (user.email === val) {
                newUser = new User(user.firstName, user.lastName, user.email);
                newUser.ShowFilterUsers(user);
            }
            if (user.phone === val) {
                newUser = new User(user.firstName, user.lastName, user.phone);
                newUser.ShowFilterUsers(user);
            }
            if (user.address.city === val) {
                newUser = new User(user.firstName, user.lastName, user.address);
                newUser.ShowFilterUsers(user);
            }
            if (user.address.street === val) {
                newUser = new User(user.firstName, user.lastName, user.address);
                newUser.ShowFilterUsers(user);
            }
            if (user.address.number === val) {
                newUser = new User(user.firstName, user.lastName, user.address);
                newUser.ShowFilterUsers(user);
            }
            if (user.address === val) {
                newUser = new User(user.firstName, user.lastName, user.address);
                newUser.ShowFilterUsers(user);
            }
            this.printUsers();
        }
        )
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
const searchBtn = document.querySelector("#searchBtn");
const firstNameSearch = document.querySelector('#firstNameSearch');
const idSearch = document.querySelector('#idSearch');
const lastNameSearch = document.querySelector('#lastNameSearch');
const citySearch = document.querySelector('#lastNameSearch');
const streetSearch = document.querySelector('#streetSearch');
const numberSearch = document.querySelector('#numberSearch');



//keeps the data in a global variable
const usersList = {
    manager:{},
    users: {},
};

getusersList();

// btnAdd.onclick = () => {
//     console.log("dfehu")
//     u = new User(UserName.value, UserWeight.value);
//     //m.AddUser(u);
//     const Request = new XMLHttpRequest();
//     Request.open('POST', './users.json', true);
//     xhr.setRequestHeader('Content-type', u);
//     xhr.onload = function () {
//         // do something to response
//         console.log(this.responseText);
//     };

// }

// btnUpdate.onclick = () => {
//     Id = document.querySelector('#id');
//     const u = m.SearchIdUser(Id.value);
//     u[0].setUserName = UserName.value;
//     u[0].setUserWeight = UserWeight.value;
//     console.log(u);
// }


// //on delete click
// btnDelete.onclick = () => {
//     Id = document.querySelector('#idDelete');


//     btnDelete.onclick = (id) => {
//         for (let i = 0; i < usersList.users.length; i++) {
//             console.log("id delete is working");
//             if (user.id === parseInt(id)) {
//                 delete usersList[i];
//             }
//         }
//         console.log("deleted succesfully!")
//         console.log(usersList.users)
//     }
//}


//show user
showUserById.onclick = () => {
    id = idShow.value;
    usersList.users.forEach(user => {
        if (user.id === parseInt(id)) {
            newUser = new User(user.firstName, user.weight);
            newUser.ShowUser(user);
        }
    })
}

searchBtn.onclick = () => {
    // search();
    if (idSearch.checked)
        s.printUsers(s.Search(parseInt(idSearch.value)));
    if (firstNameSearch.checked)git
        s.printUsers(s.Search(firstNameSearch.value));
    if (lastNameSearch.checked)
        s.printUsers(s.Search(lastNameSearch));
    if (citySearch.checked)
        s.printUsers(s.Search(citySearch.value));
    if (streetSearch.checked)
        s.printUsers(s.Search(streetSearch));
    if (numberSearch.checked)
        s.printUsers(s.Search(numberSearch.value));
}

loginBtn.onclick =() =>{
    id = loginInput.value;
    if(usersList.manager.id===parseInt(id)){
       location.href=`manager.html`
    }

    else(usersList.users.forEach(u=>{
        if(u.id===parseInt(id)){
            location.href=`user.html`
        }
    }))
}
