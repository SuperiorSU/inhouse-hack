const mongoose = require('mongoose');
require('dotenv').config();
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    admissionNo: {
        type: String,
        required: true,
    },
    batch:{
        type:String,
        enum:['uniques2.0', 'uniques3.0'],
        required:true
    },
    email: {
        type: String,
        required: true,
    },
    leader:{
        type:String,
        required:true
    },
    teamMember1:{
        type:String,
        
    },
    teamMember2:{
        type:String,
        
    },
    teamMember3:{
        type:String,
        
    },
});

module.exports = mongoose.model('User', UserSchema);
    