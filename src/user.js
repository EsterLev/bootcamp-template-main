printUser = document.querySelector('.ShowUser');

let usersList;

const searchURL = new URLSearchParams(location.search);
const userURL = parseInt(searchURL.get('id'));
let currentUser = "";

//get the user from the json file
theCurrentUser = async () => {
    const response = await fetch(`https://shrouded-escarpment-42635.herokuapp.com/users/${userURL}`,
        { method: 'GET' })
    const user = await response.json();
    currentUser = user[0];
}

//show  the current user
const ShowUser = async () => {

    await theCurrentUser();
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
    span.innerHTML = currentUser.firstName + ' ' + currentUser.lastName + ' ';
    city.innerHTML = currentUser.address.city + ' ';
    street.innerHTML = currentUser.address.street + ' ';
    number.innerHTML = currentUser.address.number + ' ';
    address.append(city);
    address.append(street);
    address.append(number);
    phonespan.innerHTML = 'phone: ' + currentUser.phone + ' ';
    emailspan.innerHTML = 'mail: ' + currentUser.email + ' ';
    div3.append(span);
    div3.append(span2);
    div3.append(address);
    div3.append(phonespan);
    div3.append(emailspan);
    const h5 = document.createElement('h5');
    h5.innerHTML = 'id:' + currentUser.id + ' ';
    div3.append(h5);
    const h = document.createElement('h6');
    h.innerHTML = 'weight' + currentUser.meeting[currentUser.meeting.length - 1].weight + ' ';
    div3.append(h);
    div2.append(div3);
    const div4 = document.createElement('div');
    a = document.createElement('a');
    a.innerHTML = 'to manage a diary';
    a.href = 'manageDairy.html?id=' + `${currentUser.id}`;
    div.append(a);
    div.append(div2);
    div.append(div4);
    printUser.append(div);
};

ShowUser();

//to edit the user
const Edit = document.querySelector('#Edit');
const ShowEdit = document.getElementById('ShowEdit');
Edit.onclick = (e) => {
    ShowEdit.innerHTML = '';
    let table = '';
    theCurrentUser();
    e.preventDefault();
    console.log()
    table += `
    <tr>
        <th>first name: <input type="text" id="first" value=${currentUser.firstName}></input></th>
        <th>last name: <input type="text" id="last" value=${currentUser.lastName}></input></th>
        <th>city: <input type="text" id="city" value=${currentUser.address.city}></input></th>
        <th>street: <input type="text id="street" value=${currentUser.address.street}></input></th>
        <th>number: <input type="text" id="number" value=${currentUser.address.number}></input></th>
        <th>phone: <input type="text" id="phone" value=${currentUser.phone}></input></th>
        <th>email: <input type="text" id="mail" value=${currentUser.email}></input></th>
        <th>height: <input type="text" id="height" value=${currentUser.height}></input></th>
        <th>weight: <input type="text" id="weight" value=${currentUser.meeting[currentUser.meeting.length - 1].weight}></input></th>
        <th><button type="submit" id="save" value="save changea">save changes</button></th>
    </tr>`

    ShowEdit.innerHTML += table;
    const btnSave = document.getElementById('save');
    const firstname = document.getElementById('first');
    const lastname = document.getElementById('last');
    const city = document.getElementById('city');
    const street = document.getElementById('street');
    const number = document.getElementById('number');
    const phone = document.getElementById('phone');
    const mail = document.getElementById('mail');
    const height = document.getElementById('height');
    const weight = document.getElementById('weight');
//save the changes
    btnSave.onclick = async () => {
        currentUser.firstName = firstname.value;
        currentUser.lastName = lastname.value;
        currentUser.address.city = city.value;
        // currentUser.address.street = street.value;
        currentUser.address.number = number.value;
        currentUser.phone = phone.value;
        currentUser.mail = mail.value;
        currentUser.height = height.value;
        currentUser.weight = weight.value;
        const response =  await fetch(`https://shrouded-escarpment-42635.herokuapp.com/users/${userURL}`, {
            method: `PATCH`,
            // Sending only the fields that to be updated
            body: JSON.stringify({
                "firstName": currentUser.firstName,
                "lastName": currentUser.lastName,
                "address.city": currentUser.address.city,
                "address.street": currentUser.address.street,
                "address.number": currentUser.address.number,
                "phone": currentUser.phone,
                "email": currentUser.email,
                "height": currentUser.height,
                "weight": currentUser.weight
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
        console.log(response);
    }
}