
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

let users = [
    {
      "username": "john",
      "firstName": "John",
      "lastName": "Doe",
      "gender": "Male",
      "profileURL": "img/portrait-4719921_1920.jpg",
      "email": "john.doe@example.com"
    },
    {
      "username": "jane",
      "firstName": "Jane",
      "lastName": "Doe",
      "gender": "Female",
      "profileURL": "img/woman-1063100_1920.jpg",
      "email": "jane.doe@example.com"
    }
]

// GET
app.get('/api/users', (request, response) => {
    response.json(users);
})

app.listen(port, () => console.log('Server attivo sulla porta 3000'));