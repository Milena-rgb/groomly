import { model, Schema, Model, Document } from 'mongoose';

export interface IGuest extends Document {
  name: string;
}

const GuestSchema: Schema = new Schema({
  name: { type: String, required: true }
});

export const Guest: Model<any> = model('Guest', GuestSchema);
