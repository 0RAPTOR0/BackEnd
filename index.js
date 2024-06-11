const express = require('express');

const UserRouter = require('./routers/userRouter')

// initialize express
const app = express();

const port = 5000;     //server port

app.use('/user', UserRouter);

// route or endpoint 
app.get('/',(req,res) => {
    res.send('Response from express')
})

// add
app.get('/add', (req,res) => {
    res.send('Response from add');
})

app.get('/getall', (req, res) => {
    res.send('Response from getall');
})

app.get('/delete', (req, res) => {
    res.send('Response from delete');
})

app.get('/update', (req, res) => {
    res.send('Response from update');
})

// getall
// delete 
// update

app.listen(port,() => {
    console.log('server started');
})