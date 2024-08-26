import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);


app.get('/', (req, res) => {
    res.send('hello word')
})

app.listen(app.get('port'),()=>[
    console.log('server on port 3000')
])