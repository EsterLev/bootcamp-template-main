const numOfFoods = document.getElementById('num');
const btnAddBreakfast = document.getElementById('btnAddBreakfast');
const btnAddLunch = document.getElementById('btnAddLunch');
const btnAddDinner = document.getElementById('btnAddDinner');
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

//shows the daily description
showTheDaily = () => {
    const div = document.createElement('div');
    usersList.users.forEach(user => {
        if (user.id === userURL && user.managerDaily && user.managerDaily[0].meals.length > 0) {
            user.managerDaily[0].meals.forEach(day => {
                if (day !== null) {
                    day.meal.forEach(f => {
                        const desc = document.createElement('span');
                        desc.innerHTML = f + ' ';
                        div.append(desc);
                    })
                }
            })
            const date = document.createElement('span');
            date.innerHTML = user.managerDaily[0].date;
            div.append(date);
            show.append(div);
        }
    });
}



btnshow.onclick = () => {
    showTheDaily();
}

const daily = [new Array(new Array(), new Array(), new Array()), String];


btnAddBreakfast.onclick = () => {
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
        if (daily[0] === undefined)
            daily[0] = new Array();
        if (daily[0[0]] === undefined)
            daily[0[0]] = new Array();
        daily[0[0]].push(inputDesc.value);
    }
    // inputDate.onchange=()=>{
    //     daily.push(inputDate.value);
    // }
    console.log(daily);
}

btnAddLunch.onclick = () => {
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
        daily[0[1]].push(inputDesc.value);
    }
    console.log(daily);
}

btnAddDinner.onclick = () => {
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
        daily[0[2]].push(inputDesc.value);
    }
    console.log(daily);
}

//creating description per meals
// btnMeals.onclick=()=>{
//     //meals
//     const brekfest=document.createElement('span');
//     inputDescription(brekfest)
//     const lunch=document.createElement('span');
//     inputDescription(lunch)
//     const dinner=document.createElement('span');
//     inputDescription(dinner)

//     div.append(brekfest);
//     div.append(lunch);
//     div.append(dinner);

//     addFoods.append(div);  

//   }
//fill the inputs for each meal
// inputDescription = (e) => {
//     const inputDesc = document.createElement('input');
//     inputDesc.type = "text";
//     inputDesc.id = "valueDesc";
//     inputDesc.onchange = () => {
//         daily.push(inputDesc.value);
//     }
//     // inputDate.onchange=()=>{
//     //     daily.push(inputDate.value);
//     // }
//     console.log(daily);
//     div.append(inputDesc);
// }


//update date
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
    inputDate.onchange = () => {
        daily[3] = inputDate.value;
    }
}

btnSave.onclick = () => {
    console.log(userURL);
    fetch(`http://localhost:3000/users/${userURL}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",

        // Sending only the fields that to be updated
        body: JSON.stringify({
            managerDaily: daily
        })
    })
        .then(function (response) {

            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    daily = [new Array(new Array(), new Array(), new Array()), String];
}


