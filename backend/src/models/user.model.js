const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true,
        default: "",
        unique: true,
    },

    lastName:{
        type: String,
        required: true,
        default: "",
        unique: true,
    },

    email: {
        type: String,
        required: true,
        default: "",
        unique: true  
    },

    password: {
        type: String,
        required: true,
        unique: true,
        default: "",
    },


    address : {
        type: String,
        default: "",
    },

    phone: {
        type: String,
        default: "",
    },


    imagePath: {
        type: String,
        trim: true,
       
    },
    cloudinary_id:{
        type: String,
    },

    created: {
        type: Date,
        default: Date.now(),
    },

});

const User = mongoose.model('User',userSchema);
module.exports = User;