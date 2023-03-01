const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        trim: true
    },
    groupCreator: {
        type: String,
        required: true
    }
});

const Group = model('Group', groupSchema);