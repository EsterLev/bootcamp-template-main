const loginBtn = document.querySelector('#enter');
const loginInput = document.querySelector('#login');

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
        }
    }
};

getusersList();

loginBtn.onclick = () => {
    id = loginInput.value;
    if (usersList.manager.id === parseInt(id)) {
        location.href = `./manager.html`
    }

    else (usersList.users.forEach(u => {
        if (u.id === parseInt(id)) {
            //צריך לשרשר פה את ה ID
            location.href = `user.html`
        }
    }))
}

const SearchFoods = document.querySelector('#theFood');

let container = "";
const creatTable = (arr) => {
    console.log(arr);
    let table = '';
    arr.forEach((product) => {
        table += `
        <tr>
            <th>${product.shmmitzrach}</th>
            <th ><input type="checkbox" name="check" id="check"/></th>
        </tr>`
    })
    container = document.querySelector('.usersTable');
    container.innerHTML += table;
}

SearchFoods.onsubmit = (e) => {
    //e.preventDefault();
    console.log(search.value);
    const req = fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${search.value}`)
    req.then(response => response.json())
        .then(response => {
            console.log(response);
            creatTable(response.result.records);
        }
        )
        .catch(err => console.error(err));
}

