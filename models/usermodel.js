const { Schema, model } = require('../connection')       //importing connection file

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    city : {type : String, default: 'unknown'},
    createdAt : { type : Date, default: Date.now }

});

module.exports = model('User', mySchema)