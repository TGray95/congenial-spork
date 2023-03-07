const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        trim: true
    },
    groupCreator: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 300
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Group = model('Group', groupSchema);

module.exports = Group;