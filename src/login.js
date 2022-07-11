const loginBtn = document.querySelector('#enter');
const email = document.querySelector('#mail');
const phone = document.querySelector('#phone');

const usersList = {
    manager: {},
    users: {},
};

// //get the data from the json file
// const getUser = (mail, phone) => {
//     fetch(`http://localhost:3000/login/`)
//     .then(response => {
//         console.log(response);
//         //  usersList.users = response.users; usersList.manager = response.manager; 
//         })
// }


loginBtn.onsubmit = () => {
    mail = email.value;
    phoneV = phone.value;
    if (mail === undefined || phoneV === undefined) {
        alert("you not enter anything");
    }
    user = getUser(mail, phoneV);
    if (user !== undefined) {
        if (user.id === '212') {
            window.location.href = './manager.html';
        }
        else {
            window.location.href = './user.html?id=' + `${u.id}`;
        }
    }
    else {
        alert("not found try again");
    }
}

