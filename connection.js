const mongoose = require('mongoose');

const url = "mongodb+srv://xxiraptor:UP32je5351@cluster0.wrp0ow9.mongodb.net/raptor?retryWrites=true&w=majority&appName=Cluster0"

// asynchrounous function - return promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err)
});