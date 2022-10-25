const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const books = require('./data/books.json');


app.get('/', (req, res) => {
    res.send('server is running')
});

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(b => b.id == id);
    res.send(book)
})



app.listen(port, () => {
    console.log(`server running on port, ${port}`);
})