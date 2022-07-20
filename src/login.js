const loginBtn = document.querySelector('#enter');
const emailI = document.querySelector('#mail');
const phoneI = document.querySelector('#phone');

loginBtn.onsubmit = () => {
    email = emailI.value;
    phone = phoneI.value;
    if (email === "" || phone === "") {
        alert("you not enter something");
    }
    obj = { email, phone};
    user = login(obj);
    if (user !== undefined) {
        if (user.id === '212') {
            window.location.href = './manager.html';
        }
        else {
            window.location.href = './user.html?id=' + `${user.id}`;
        }
    }
    else {
        alert("not found try again");
    }
}

window.location.href = './manager.html';

login = async (obj) => {
    console.log(obj);
    const response =  await fetch(`http://localhost:3000/login`, {
        method: `POST`,
        body: JSON.stringify({
            obj
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log(response);
    const user = response.json();
    return user[0];
}