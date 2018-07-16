const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  appointments: [
    {
      day: {
        type: Number,  
      },
      title: {
        type: Number,  
      },
      description: {
        type:String
      },
      from: {
        type:String, 
      },
      to: {
        type:String,
      }
    }
  ]
  
  
});

module.exports = User = mongoose.model('users', UserSchema);