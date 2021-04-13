import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the User Schema.
 * @param username:string
 * @param password:string
 */
export interface IUser extends Document {
  username: string;
  avatar: string;
}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: Model<IUser> = model("User", userSchema);

export default User;
