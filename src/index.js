const createUser = (u) => {
    userContainer.innerHTML = "";
    FirstName = document.createElement('h4');
    LastName = document.createElement('h4');
    Address = document.createElement('h4');
    Phone = document.createElement('h4');
    Email = document.createElement('h4');
    Height = document.createElement('h4');
    Weight = document.createElement('div');
    WeightStart = document.createElement('h4');
    StartBmi = document.createElement('h4');
    CurrentBmi = document.createElement('h4');
    WeightMeetings = document.createElement('h4');
    FirstName.innerHTML = u.firstName;
    LastName.innerHTML = u.lastName;
    Address.innerHTML = u.address.street + " " + u.address.number + " " + u.address.city;
    Phone.innerHTML = u.phone;
    Email.innerHTML = u.email;
    Height.innerHTML = u.height;
    WeightStart.innerHTML = "Start Weight: " + u.weight.start;
    StartBmi.innerHTML = "Start BMI: " + u.weight.start / (u.height * u.height);
    CurrentBmi.innerHTML = "CurrentBmi: " + u.weight.meetings[u.weight.meetings.length - 1].weight / (u.height * u.height);
    WeightMeetings.innerHTML = "Meetings: ";
    u.weight.meetings.forEach(m => {
        let table = '';
        table += `
        <tr>
            <th>${m.date}</a></th>
            <th>${m.weight}</th>
        </tr>`
        containerMeetings = document.querySelector('.userTable');
        containerMeetings.innerHTML += table;
    })
    userContainer.style.display = "flex";
    userContainer.style.flexDirection = "column";
    userContainer.style.padding = "10px";
    userContainer.style.alignItems = "start";
    userContainer.append(FirstName, LastName, Address, Phone, Email, Height, WeightStart, StartBmi, CurrentBmi, WeightMeetings);

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
            users = JSON.parse(Request.responseText).users;
            users.forEach(user => {
                if (user.id === userURL) {
                    createUser(user);
                }
            })
        }
    }
};

let filterUsers;
// let usersList;

//pushing to the products id
AddUser = (user) => {
    return usersList.push(user);
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
    let table = '';
    this.filterUsers.forEach(user => {
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
    this.printUsersFilter();
}
// }

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

btnUpdate.onclick = (e) => {
    e.preventDefault();
    FirstName.setAttribute('contenteditable', 'true');
    LastName.setAttribute('contenteditable', 'true');
    Address.setAttribute('contenteditable', 'true');
    Phone.setAttribute('contenteditable', 'true');
    Email.setAttribute('contenteditable', 'true');
    Height.setAttribute('contenteditable', 'true');
    FirstName.style.color = 'gray';
    LastName.style.color = 'gray';
    Address.style.color = 'gray';
    Phone.style.color = 'gray';
    Email.style.color = 'gray';
    Height.style.color = 'gray';

}


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



