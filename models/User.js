const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
     googleID: String,
     displayName: String,
     image: String
});

mongoose.model('User', userSchema);
