import mongoose, { Schema } from  'mongoose';

const tokenUserSchema = Schema({
  token: { type: String, unique: true, lowercase: true },
  packages: [{
    packageName: String,
    packageNumber: String,
    provider: String
  }],
  lastUpdate: { type: Date, default: Date.now() }
});

export const TokenUserModel = mongoose.model('tokenuser', tokenUserSchema);

const packageSchema = Schema({
  token: { type: String, lowercase: true, required: true },
  name: String,
  number: String,
  provider: String,
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
