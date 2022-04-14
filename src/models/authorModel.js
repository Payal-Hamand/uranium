const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id : {
        type:String, 
    required: true
    }, 
    authorName: String,
    age: Number,
    address: String 
    },
     {timestamps: true})



    module.exports = mongoose.model('Author', authorSchema) 