//const showUser = document.querySelector('.ShowUser');
class User {

    printUser = document.querySelector('.ShowUser');

    #firstName;
    #lastName;
    #city;
    #street;
    #number;
    #phone;
    #email;
    #height;
    #weight;
    #id;
    static Id = 0;
    //function
    //GET and SET
    //for the private variables
    set setFirstName(firstName) {
        this.#firstName = firstName;
    }

    get getFirstName() {
        return this.#firstName;
    }

    set setLastName(LastName) {
        this.#lastName = LastName;
    }
    get getLastName() {
        return this.#lastName;
    }

    get getPhone() {
        return this.#phone;
    }

    set setPhone(phone) {
        this.#phone = phone;
    }
    get getPhone() {
        return this.#phone;
    }

    set setEmail(mail) {
        this.#email = mail;
    }
    get getEmail() {
        return this.#email;
    }

    set setCity(city) {
        this.#city = city;
    }
    get getCity() {
        return this.#city;
    }

    set setStreet(street) {
        this.#street = street;
    }
    get getStreet() {
        return this.#street;
    }

    set setNumber(number) {
        this.#number = number;
    }
    get getNumber() {
        return this.#number;
    }

    set setHeight(height) {
        this.#height = height;
    }

    get getHeight() {
        return this.#height;
    }

    set setWeight(weight) {
        this.#weight = weight;
    }

    get getWeight() {
        return this.#weight;
    }

    get getId() {
        return this.#id;
    }


    constructor(firstName, lastName, city, street, number, phone, email, height, weight) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#city = city;
        this.#street = street;
        this.#number = number;
        this.#phone = phone;
        this.#email = email;
        this.#height = height;
        this.weight = weight;
        this.#id = ++this.Id;
    };

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
        this.#filterUsers =usersList.users;
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
    u = false;
    ShowFilterUsers(user) {
        if (this.#filterUsers.length !== 0) {
            this.#filterUsers.foreach(us => {
                if (us.id === user.id)
                    u = true;
            });
            if (u === false)
                this.#filterUsers.push(user);
        }
        else {
            this.#filterUsers.push(user);
        }
    }

    printUsersFilter() {
        let table = '';
        this.#filterUsers.forEach(user => {
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

    Search = (val) => {
        if (this.#filterUsers.length !== 0) {
            this.#filterUsers.forEach(user => {
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
    m = new Manager();
    if (id.checked)
        m.Search(parseInt(idSearch.value));
    if (firstName.checked)
        m.Search(firstNameSearch.value);
    if (lastName.checked)
        m.Search(lastNameSearch.value);
    if (address.checked) {
        if (citySearch.value)
            m.Search(citySearch.value);
        if (streetSearch.value)
            m.Search(streetSearch);
        if (numberSearch.value)
            m.Search(numberSearch.value);
    }
}

