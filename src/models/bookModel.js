

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    bookName: { 
        type: String,
        required :true,
    }, 
    authorName: String, 
    tags: [String],
    pages : Number,
    stockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year : {type : Number,default:2021}

  },  { timestamps: true });

    module.exports = mongoose.model('Book_Collection', BookSchema)




// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
  
    
// }, { timestamps: true });


// module.exports = mongoose.model('book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
