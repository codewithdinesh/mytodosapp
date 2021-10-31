const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid:{
        type:String  } ,
    landlord_uid: String,
    address_new: String
}, {
    timestamps: {
        createdAt: 'created_at',
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;