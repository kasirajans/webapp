const mongoose = require('mongoose');
//const Schema=mongoose.Schema; can be used as destructre 
const {Schema}=mongoose;

const userSchema = new Schema({
    googleId: String 
});


// user collection and user shcmea createcd. This will not over ride the user collection(table)
mongoose.model('users',userSchema);