const urlAPI = 'http://localhost:3000/api/users/';

document.addEventListener('DOMContentLoaded', function(){
    let addBtn = document.querySelector('#formUser button');
    addBtn.addEventListener('click', addUser);
    getAllUsers();

})

function getAllUsers() {
    fetch(urlAPI).then(response => response.json()).then(json => {
        console.log(json);
        printTableUser(json);
    })
}

function detailUser(id) {
    fetch(urlAPI+id).then(response => response.json()).then(json => {
        console.log(json);
    })
}

function addUser() {
    let name = document.querySelector('#formUser input[name="nome"]');
    let lastname = document.querySelector('#formUser input[name="cognome"]');
    let city = document.querySelector('#formUser input[name="citta"]');
    let email = document.querySelector('#formUser input[name="email"]');

    let obj = { 
        name: name.value, 
        lastname: lastname.value, 
        city: city.value, 
        email: email.value, 
        password: 'qwerty'
    }

    fetch(urlAPI, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
          }
    }).then(response => response.json()).then(json => {
        console.log(json);
        getAllUsers();

        name.value = '';
        lastname.value = '';
        city.value = '';
        email.value = '';
    })
}

function removeUser(id) {
    fetch(urlAPI+id, {method: 'DELETE'}).then(response => response.json()).then(json => {
        console.log(json);
        getAllUsers();
    })
}

function printTableUser(users) {
    let tbody = document.querySelector('#tableUser tbody');
    tbody.innerHTML = '';
    users.forEach(ele => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
                        <td>${ele.id}</td>
                        <td>${ele.name}</td>
                        <td>${ele.lastname}</td>
                        <td>${ele.city}</td>
                        <td>${ele.email}</td>
                        <td>
                            <button type="button" onclick="removeUser(${ele.id})" class="btn btn-danger btn-sm"><i class="bi bi-trash-fill"></i></button>
                            <button type="button" onclick="detailUser(${ele.id})" class="btn btn-warning btn-sm"><i class="bi bi-person-lines-fill"></i></button>
                        </td>
                        `
        tbody.appendChild(tr);
    })
}