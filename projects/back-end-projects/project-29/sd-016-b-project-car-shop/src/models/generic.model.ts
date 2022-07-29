import mongoose, { isValidObjectId } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

export default abstract class GenericModel<T> implements Model<T> {
  protected _modelMongoose: mongoose.Model<T>;

  constructor(modelMongoose: mongoose.Model<T>) {
    this._modelMongoose = modelMongoose;
  }

  async create(obj: T): Promise<T> {
    const data = await this._modelMongoose.create(obj);

    return data;
  }

  async read(): Promise<T[]> {
    const data = await this._modelMongoose.find();

    return data;
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    const data = await this._modelMongoose.findById(id);

    return data;
  }

  async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    const data = await this._modelMongoose
      .findOneAndUpdate({ _id: id }, obj, { returnOriginal: false });

    return data;
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    const data = await this._modelMongoose.findByIdAndDelete(id);

    return data;
  }
}