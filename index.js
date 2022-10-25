const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const corse = require('./data/corse.json');


app.get('/', (req, res) => {
    res.send('server is running')
});

app.get('/corse', (req, res) => {
    res.send(corse)
})

app.get('/corse/:id', (req, res) => {
    const id = req.params.id;
    const corses = corse.find(c => c.id == id);
    res.send(corses)
})



app.listen(port, () => {
    console.log(`server running on port, ${port}`);
})