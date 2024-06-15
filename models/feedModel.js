const { Schema, model } = require('../connection')       //importing connection file

const mySchema = new Schema({
    title : String,
    image : String,
    user : String,
    like : { type : Number, default : 0 },
    shares : { type : Number, default : 0 }
});

module.exports = model('feeds', mySchema)