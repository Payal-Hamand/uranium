const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male","female","other"]
    },
    isDelete :{
        type:Boolean,
        default:false
    },
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('Usermake', userSchema)




//Token

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjYxNjMwMDE3M2YyNWMxNDY0NzdkMDUiLCJiYXRjaCI6InRob3JpdW0iLCJvcmdhbmlzYXRpb24iOiJGVW5jdGlvblVwIiwiaWF0IjoxNjUwNTQ5OTk5fQ.huRITq-O2ikCfXtCj737zso-UOc9XmkBE_Y1v2UYb0M"
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjYxNjMwMDE3M2YyNWMxNDY0NzdkMDUiLCJiYXRjaCI6InVyYW5pdW0iLCJvcmdhbmlzYXRpb24iOiJGVW5jdGlvblVwIiwiaWF0IjoxNjUwNTU3NjYxfQ.wjOd750JsDY0aCzYT0uWb8uMduhCwmbiFS0dUlxPSF0