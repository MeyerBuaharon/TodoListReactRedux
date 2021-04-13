import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "./User";

/**
 * Interface to model the Todo Schema.
 * @param user:ref => User._id
 * @param description:string
 * @param completed:boolean
 */
export interface ITodo extends Document {
  user: IUser["_id"];
  description: string;
  completed: string;
}

const todoSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const Todo: Model<ITodo> = model("Todo", todoSchema);

export default Todo;
