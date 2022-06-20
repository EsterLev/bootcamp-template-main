class User {

    ShowUser = document.querySelector('.ShowUser');

    #UserName;
    #UserWeight;
    #id;
    static Id = 0;
    //פונקציות 
    //GET ו SET
    //למשתנים ה PRIVATE
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
            div.classList.add('product');
            div.classList.add('divProduct');
            const div2 = document.createElement('div');
            const div3 = document.createElement('div');
            const span = document.createElement('span');
            span.innerHTML = user.getUserName;
            div3.append(span);
            const h5 = document.createElement('h5');
            h5.innerHTML = 'id:' + user.getId;
            div3.append(h5);
            const h = document.createElement('h6');
            h.innerHTML = 'weight' + user.getUserWeight;
            div3.append(h);
            div2.append(div3);
            const div4 = document.createElement('div');
            div.append(div2);
            div.append(div4);
            this.ShowUser.append(div);
        }
    }
}

class Manager {

    ShowUser = document.querySelector('.ShowUser');

    #usersList;

    constructor() {
        const Request = new XMLHttpRequest();
        Request.open('GET', './users.json');
        Request.send();
        Request.onload = () => {
            req = Request.response;
            console.log(Request.response);
        }
        console.log(this.#usersList);
        this.#usersList = new Array();
        getusersList();
    };


    set setusersList(usersList) {
        this.#usersList = usersList;
    }
    get getusersList() {
        return this.#usersList;
    }

    //חיפוש יוזר מסוים
    SearchUserById(id) {
        getusersList
    }
    //דחיפת מוצר למערך המוצרים
    AddUser(user) {
        return this.#usersList.push(user);
    }

    //מחיקת מוצר ממערך המוצרים
    DeleteUser(id) {
        const arr = this.#usersList.filter(c => c.getId != id);
        this.#usersList = arr;
    }
}

const btnAdd = document.querySelector('#btnAdd');
const btnDelete = document.querySelector('#btnDelete');
const btnUpdate = document.querySelector('#btnUpdate');
const UserName = document.querySelector("#UserName");
const UserWeight = document.querySelector('#UserWeight');
const showUserById = document.querySelector('#showUserById');
const idShow = document.querySelector('#idShow');

/* במשתנה גלובלי jsonשמירת נתונים שנשלפו מה */
const usersList = {
    users: {},
};

//get the data from the json file
// const getusersList = () => {
// fetch('./users.json')
//     .then(response => {
//         return response.json();
//     }).then(d => {
//         usersList.users = d;
//     const Request = new XMLHttpRequest();
//     Request.open('GET', 'users.json');
//     Request.send();
//     Request.onload = function () {
//         console.log(Request.responseXML);
//     };
// }
//)



// getusersList();

btnAdd.onclick = () => {
    u = new User(UserName.value, UserWeight.value);
    m.AddUser(u);
}

btnUpdate.onclick = () => {
    Id = document.querySelector('#id');
    const u = m.SearchIdUser(Id.value);
    u[0].setUserName = UserName.value;
    u[0].setUserWeight = UserWeight.value;
    console.log(u);
}

//בלחיצה על מחיקת user
btnDelete.onclick = () => {
    Id = document.querySelector('#idDelete');
    m.DeleteUser(parseInt(Id.value));
    console.log(m.getusersList);
}

showUserById.onclick = () => {
    id = idShow.value;
    m.ShowUser.innerHTML = '';
    u = m.SearchUserById(id);
    u.ShowUser();
}