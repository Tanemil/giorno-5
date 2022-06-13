

fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => {
        data.forEach((element , index) => {
            document.querySelectorAll('.card img')[index].src = element.profileURL
            document.querySelectorAll('.card-body h2')[index].innerHTML = element.username
            document.querySelectorAll('.card-body p.card-text')[index].innerHTML = 'gender: ' + element.gender
            document.querySelectorAll('.card-body p.email')[index].innerHTML = 'email: ' + element.email
        });
    });