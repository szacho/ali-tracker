import mongoose, { Schema } from  'mongoose';

const tokenUserSchema = Schema({
  token: { type: String, unique: true },
  packagesNumbers: [String],
  lastUpdate: Date
});

export const TokenUser = mongoose.model('tokenuser', tokenUserSchema);
