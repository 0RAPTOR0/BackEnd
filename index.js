const express = require('express');

const UserRouter = require('./routers/userRouter')
const FeedRouter = require('./routers/feedRouter')

const cors = require('cors');

// initialize express
const app = express();

const port = 5000;     //server port

// middleware

// handling cors
app.use(cors({
    origin:['http://localhost:3000']
}));

app.use(express.json());                       //data goes from this and this converts jason or other to java script

app.use('/user', UserRouter);
app.use('/feed', FeedRouter);

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