import { model, Schema, Model, Document } from 'mongoose';

export interface IEvent extends Document {
  name: string;
  host: string;
  eventLocation: string;
  eventDateTime: string; //DateTime
  description: string;
}

const EventSchema: Schema = new Schema({
  name: { type: String, required: true },
  host: { type: String, required: true },
  eventLocation: { type: String, required: true },
  eventDateTime: { type: String, required: true },
  description: { type: String, required: true }
});

export const Event: Model<any> = model('Event', EventSchema);
