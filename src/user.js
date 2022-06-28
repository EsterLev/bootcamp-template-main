// const showUser = document.querySelector('.ShowUser');
class User {
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

    ShowUser(id){
        user = usersList.users.forEach(u=>u.id===id);
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
            a = document.createElement('a');
            a.innerHTML = 'to manage a diary';
            a.href="manageDairy.html";
            div.append(div2);
            div.append(div4);
            this.printUser.append(div);
        }
    }
}

printUser = document.querySelector('.ShowUser');

const usersList = {
    manager: {},
    users: {},
};

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
            console.log(usersList.manager);
            let table = '';
            usersList.users.forEach(user => {
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
                    a = document.createElement('a');
                    a.innerHTML = 'to manage a diary';
                    a.href="manageDairy.html";
                    div.append(a);
                    div.append(div2);
                    div.append(div4);
                    printUser.append(div);
            //     table += `
            //  <tr>
            //      <th>${user.firstName + ' ' + user.lastName}</th>
            //      <th>${user.weight[usersList.users.length - 1] / Math.sqrt(user.height)}</th><br/>
            //  </tr>`
          //  user.ShowUser(user.id);
            }})
            // const container = document.querySelector('.ShowUser');
            // container.innerHTML += table;
        }
    }
};

getusersList();


