import mongoose, { Schema } from 'mongoose';

var clientSchema = new Schema({
  firstName : String,
  lastName: String,
  email: String,
  password: String
});

export defaul mongoose.model('client', clientSchema);
