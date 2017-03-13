import mongoose, { Schema } from  'mongoose';

const tokenUserSchema = Schema({
  token: { type: String, unique: true, lowercase: true },
  packagesNumbers: [String],
  lastUpdate: Date
});

export const TokenUserModel = mongoose.model('tokenuser', tokenUserSchema);

const packageSchema = Schema({
  token: { type: String, lowercase: true },
  name: String,
  number: String,
  done: Boolean,
  events: [{
    eventName: String,
    time: String,
    place: String,
    code: String,
    end: Boolean
  }]
});

export const PackageModel = mongoose.model('package', packageSchema);
