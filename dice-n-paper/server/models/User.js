const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  profile: {
    bio: {
      type: String,
      maxlength: 300
    },
    games: [{
      type: String,
      maxlength: 50
    }]
  }
});

const User = model('User', userSchema)

module.exports = User;