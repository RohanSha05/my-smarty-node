const express = require('express');
const app = express();
const corse = require('cors')
const port = process.env.port || 5000;

app.use(corse());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my own and personal over smarty pant')
})

const users = [
    { id: 1, name: "sabana maam", email: "sabana@gmail.com", phone: "01888888888" },
    { id: 2, name: "sabnur maam", email: "sabnur@gmail.com", phone: "01888888888" },
    { id: 3, name: "suchinda maam", email: "srabonti@gmail.com", phone: "01888888888" },
    { id: 4, name: "srabonti maam", email: "srabonti@gmail.com", phone: "01888888888" },
    { id: 5, name: "sabila maam", email: "sabila@gmail.com", phone: "01888888888" },
    { id: 6, name: "saonaham", email: "sohana@gmail.com", phone: "01888888888" },
    { id: 7, name: "nayika maam", email: "nayila@gmail.com", phone: "01888888888" },
]


app.get('/users', (req, res) => {
    console.log('query', req.query)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port)
})
