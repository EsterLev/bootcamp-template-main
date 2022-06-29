const numOfFoods = document.getElementById('num');
const btnAdd = document.getElementById('btnAdd');
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


// tryAdd=()=> {
//     let text;
//     let dateOfMeal = prompt("Please enter the date:", "Harry Potter");
//     if (dateOfMeal == null || dateOfMeal == "") {
//       text = "unvalid date";
//     } else {
//       text = "you chose " + dateOfMeal + "! what did you eat today?";

//     }
//     document.getElementById("trying").innerHTML = text;
//   }
//add the description of the food for each day
// btnAdd.onclick = (e) => {
//     const desc = document.createElement('span');
//     desc.innerHTML = "what you eat? give a description";
//     const btnMeals=document.createElement('button');
//     btnMeals.innerText="meals"
//     div.append(btnMeals)   
// }

btnAdd.onclick=()=>{
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
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
inputDescription=(e)=>{
    const inputDesc = document.createElement('input');
    inputDesc.type = "text";
    inputDesc.id = "valueDesc";
    inputDesc.onchange = () => {
        daily.push(inputDesc.value);
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


