import IUsers from '../interfaces/users.interface';
import UsersModel from '../models/users.model';

const create = async (user: IUsers): Promise<IUsers> => {
  //
  const product = await UsersModel.create(user);

  return product;
};

export default {
  create,
};