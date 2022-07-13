const loginBtn = document.querySelector('#enter');
const email = document.querySelector('#mail');
const phone = document.querySelector('#phone');

// const usersList = {
//     manager: {},
//     users: {},
// };

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

    else (usersList.users.forEach(u => {
        if (u.user.id === parseInt(id)) {
            //צריך לשרשר פה את ה ID
            flag = 1;
            window.location.href = './user.html?id=' + `${u.user.id}`;

    user = get(mail, phoneV);
    // user = getUser(mail, phoneV);
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


async function get(mail, phone) {
    try {

        const resp = await fetch('http://localhost:3000/login', { 
            method: 'POST',
            mode: "cors",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json ',
                'Accept': 'application/json',
                "Access-Control-Origin": "*"
            },
            body: JSON.stringify(mail, phone)
        })
        console.log(resp)

        console.log(resp.body)
        resp.headers.forEach(console.log);

        return JSON.stringify(resp);
    } catch (err) {
        console.log(err)
    }
}


