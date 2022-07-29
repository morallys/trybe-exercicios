import { Schema, model } from 'mongoose';
import { Car } from '../../interfaces/CarInterface';

const CarSchema = new Schema<Car>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: Boolean, required: false },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
}, { versionKey: false });

const CarMongooseModel = model<Car>('car', CarSchema);

export default CarMongooseModel;