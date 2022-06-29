const numOfFoods = document.getElementById('num');
const btnEdit = document.getElementById('btnEdit');
const addFoods = document.querySelector('.addFoods');
const btnSave = document.getElementById('btnSave');
const show = document.querySelector('#show');
const searchURL = new URLSearchParams(location.search);
const userURL = parseInt(searchURL.get('id'));
const btnshow = document.getElementById('btnshow');
const btnDate = document.getElementById('btnDate');

const usersList = {
    manager: {},
    users: {},
};

const getJson = () => {
    fetch('./users.json')
        .then(response => {
            return response.json();
        }).then(data => {
            usersList.users = data.users;
            usersList.manager = data.manager;
        })
};

getJson();

showTheDaily = () => {
    usersList.users.forEach(user => {
        if (user.id === userURL && user.managerDaily.length > 0)
            user.managerDaily.forEach(day => {
                const div = document.createElement('div');
                if (day.p) {
                    day.p.forEach(f => {
                        const desc = document.createElement('span');
                        desc.innerHTML = f + ' ';
                        div.append(desc);
                    })
                }
                const date = document.createElement('span');
                date.innerHTML = day.date;
                div.append(date);
                show.append(div);
            })
    });
}


btnshow.onclick = () => {
    showTheDaily();
}

const daily = new Array();
btnEdit.onclick = (e) => {
    const div = document.createElement('div');
    const desc = document.createElement('span');
    desc.innerHTML = "what you eat? give a description";
    const inputDesc = document.createElement('input');
    inputDesc.type = "text";
    inputDesc.id = "valueDesc";
    div.append(desc);
    div.append(inputDesc);
    addFoods.append(div);
    inputDesc.onchange = () => {
        daily.push(inputDesc.value);
    }
    // inputDate.onchange=()=>{
    //     daily.push(inputDate.value);
    // }
    console.log(daily);
}

btnDate.onclick = () => {
    const div = document.createElement('div');
    const spanDate = document.createElement('span');
    spanDate.innerHTML = "Enter date";
    div.append(spanDate);
    const date = document.createElement('span');
    date.innerHTML = "Do you want to enter date?";
    const inputDate = document.createElement('input');
    div.append(inputDate);
    addFoods.append(div);
    daily.push(Date.now);
    inputDate.onchange = () => {
        daily[daily.length - 1] = inputDate.value;
    }
}

btnSave.onclick = () => {
    usersList.users.forEach(user => {
        if (user.id === userURL) {
            daily.forEach(fOrD => {
                console.log(fOrD);
                if (fOrD === Date.now || parseInt(fOrD[0])!==NaN) {
                    console.log(typeof (fOrD));
                    user.managerDaily[0].date = fOrD;
                }
            })
            daily.forEach(f => {
                if (!parseInt(f[0]))
                    user.managerDaily[0].p.push(f);
            })
            console.log(user.managerDaily);
        }
    });
}
