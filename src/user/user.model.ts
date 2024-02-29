import mongoose from "mongoose";

export interface IUser extends Document {
  id: string,
  whitelist: boolean
}

const UserSchema = new mongoose.Schema({
  id: { type: String, require: true },
  whitelist: { type: Boolean }
})

const UserModel = mongoose.model("User", UserSchema)
export default UserModel
