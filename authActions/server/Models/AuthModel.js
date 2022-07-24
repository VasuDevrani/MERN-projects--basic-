const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      email: String
    },
    { timestamps: true }
  );

  const UserModel = mongoose.model('UserModel', UserSchema);

  module.exports = UserModel;