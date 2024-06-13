const { Schema, model } = require('../connection')       //importing connection file

const mySchema = new Schema({
    name : String,
    email : String,
    password : String
});

modeule.exports = model('User', mySchema)