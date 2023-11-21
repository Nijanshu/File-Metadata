const mongoose = require('mongoose');
const { Schema } = mongoose;

const files = new Schema({
    name: {
        type: String,
        required: true
    },
    // image: {
    //     type: File,
    //     required: true
    // },
    type: {
        type: String,
        required: true
    },
    size:{
        type: Number,
        required: true
    }
});

const File = mongoose.model('files', files); 

module.exports = File; // Change 'Notes' to 'Users'
