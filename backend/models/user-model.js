const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxLength: [50, 'Name must not exceed 50 characters'],
      },
    userName: {
      type: String,
      required: [true, 'userName is required'],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    score:{
        type: Number,
        default: 1000,
    }
   
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true },
  }
);


const User = mongoose.model('User', userSchema);

module.exports = User;