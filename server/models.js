import mongoose, { Schema } from  'mongoose';

const tokenUserSchema = Schema({
  token: { type: String, unique: true, lowercase: true },
  packagesNumbers: [String],
  lastUpdate: Date
});

export const TokenUser = mongoose.model('tokenuser', tokenUserSchema);
