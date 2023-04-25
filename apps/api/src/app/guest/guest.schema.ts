import { model, Schema, Model, Document } from 'mongoose';

export interface IGuest extends Document {
  name: string;
  accepted: boolean;
  needsAccommodation: boolean;
  vegetarien: boolean;
  vegan: boolean;
  lactoseIntolerant: boolean;
  eatsPork: boolean;
  song: string;
  comment: string;
}

const GuestSchema: Schema = new Schema({
  name: { type: String, required: true },
  accepted: { type: Boolean, required: true },
  needsAccommodation: { type: Boolean, required: true },
  vegetarien: { type: Boolean, required: true },
  vegan: { type: Boolean, required: true },
  lactoseIntolerant: { type: Boolean, required: true },
  eatsPork: { type: Boolean, required: true },
  song: { type: String, required: true },
  comment: { type: String, required: true }
});

export const Guest: Model<any> = model('Guest', GuestSchema);
