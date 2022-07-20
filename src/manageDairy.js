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
let theUser = '';


const getJson = () => {
    fetch(`http://localhost:3000/users/${userURL}`)
        .then(response => {
            return response.json();
        }).then(data => {
            theUser = data;
        })
};

getJson();

//shows the daily description
showTheDaily = () => {

    usersList.users.forEach(user => {
        if (user.id === userURL && user.managerDaily.length > 0)
            user.managerDaily.forEach(day => {
                const div = document.createElement('div');
                if (day !== null && day.length > 0) {
                    day.p.forEach(f => {
                        const desc = document.createElement('span');
                        desc.innerHTML = f + ' ';
                        div.append(desc);
                    })
                    const date = document.createElement('span');
                    date.innerHTML = day.date;
                    div.append(date);
                    show.append(div);
                }

    // const div = document.createElement('div');
    // theUser.managerDaily[0].days.forEach(day => {
    //     console.log(day);
    //     if (day !== null) {
    //         day.meals.forEach(meals => {
    //             meals.meal.forEach(meal => {
    //                 const desc = document.createElement('span');
    //                 desc.innerHTML = meal + ' ';
    //                 div.append(desc);
    //             })

            })
        })
        const date = document.createElement('span');
        date.innerHTML = theUser.managerDaily[0].days[0].date;
        div.append(date);
        show.append(div);
    }


btnshow.onclick = () => {
    showTheDaily();
}
const daily = [new Array()];
const btnMeals = document.getElementById('btnMeals');

// btnAddBreakfast.onclick = () => {
//     const div = document.createElement('div');
//     const desc = document.createElement('span');
//     desc.innerHTML = "what you eat? give a description";
//     const inputDesc = document.createElement('input');
//     inputDesc.type = "text";
//     inputDesc.id = "valueDesc";
//     div.append(desc);
//     div.append(inputDesc);
//     addFoods.append(div);
//     inputDesc.onchange = () => {
//         if (daily[0] === undefined)
//             daily[0] = new Array();
//         if (daily[0[0]] === undefined)
//             daily[0[0]] = new Array();
//         daily[0[0]].push(inputDesc.value);
//     }
//     // inputDate.onchange=()=>{
//     //     daily.push(inputDate.value);
//     // }
//     console.log(daily);
// }

// btnAddLunch.onclick = () => {
//     const div = document.createElement('div');
//     const desc = document.createElement('span');
//     desc.innerHTML = "what you eat? give a description";
//     const inputDesc = document.createElement('input');
//     inputDesc.type = "text";
//     inputDesc.id = "valueDesc";
//     div.append(desc);
//     div.append(inputDesc);
//     addFoods.append(div);
//     inputDesc.onchange = () => {
//         daily[0[1]].push(inputDesc.value);
//     }
//     console.log(daily);
// }

// btnAddDinner.onclick = () => {
//     const div = document.createElement('div');
//     const desc = document.createElement('span');
//     desc.innerHTML = "what you eat? give a description";
//     const inputDesc = document.createElement('input');
//     inputDesc.type = "text";
//     inputDesc.id = "valueDesc";
//     div.append(desc);
//     div.append(inputDesc);
//     addFoods.append(div);
//     inputDesc.onchange = () => {
//         daily[0[2]].push(inputDesc.value);
//     }
//     console.log(daily);
// }

const div = document.createElement('div');

//creating description per meals
btnMeals.onclick = () => {
    //meals
    const breakfest = document.createElement('span');
    inputDescription(breakfest, 'breakfests')
    const lunch = document.createElement('span');
    inputDescription(lunch, 'lunch')
    const dinner = document.createElement('span');
    inputDescription(dinner, 'dinner')
    div.append(breakfest);
    div.append(lunch);
    div.append(dinner);

    addFoods.append(div);

}
//fill the inputs for each meal
inputDescription = (span, desc) => {
    const inputDesc = document.createElement('input');
    inputDesc.type = "text";
    inputDesc.id = "valueDesc";
    inputDesc.onchange = () => {
        if (desc === 'breakfests') {
            console.log(daily[0]);
            // daily[0]=new Array();
            daily[0].push(inputDesc.value);
        }
        else {
            if (desc === 'lunch') {
                if (daily[1] === undefined)
                    daily[1] = new Array();
                daily[1].push(inputDesc.value);
            }
            else {
                if (daily[2] === undefined)
                    daily[2] = new Array();
                daily[2].push(inputDesc.value);
            }
        }
    }
    // inputDate.onchange=()=>{
    //     daily.push(inputDate.value);
    // }
    console.log(daily);
    div.append(inputDesc);
}


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
        if (daily[0].date === undefined)
            daily[0].date = Date.now;
        daily[0].date = inputDate.value;
    }
}

btnSave.onclick = () => {
    console.log(userURL);
    fetch(`http://localhost:3000/users/${userURL}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PATCH",

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

    daily = [new Array(), new Array(), new Array(), String];

    daily = [new Array()];

}





