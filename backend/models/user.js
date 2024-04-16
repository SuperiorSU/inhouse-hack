const mongoose = require('mongoose');
require('dotenv').config();
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    admission: {
        type: String,
        required: true,
    },
    batch:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
    },
    teamlead:{
        type:String,
        required:true
    },
    members:{
        type:String,
        required:true
    
    },
    member1:{
        type:String,
        required:true
        
    },
    member2:{
        type:String,
        
    },
    member3:{
        type:String,
        
    },
});

module.exports = mongoose.model('User', UserSchema);
    