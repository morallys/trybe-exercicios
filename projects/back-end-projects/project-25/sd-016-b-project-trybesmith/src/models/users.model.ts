import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

import IUsers from '../interfaces/users.interface';

const getById = async (id: number): Promise<IUsers> => {
  //
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE id = ?',
    [id],
  );

  const [user] = result as IUsers[];

  return user;
};

const create = async (user: IUsers): Promise<IUsers> => {
  //
  const { username, classe, level, password } = user;

  const [dataInserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  const { insertId } = dataInserted;

  return { id: insertId, username, classe, level, password };
};

const getByUsername = async (username: string): Promise<IUsers | void> => {
  //
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username = ?',
    [username],
  );

  const [user] = result as IUsers[];

  return user;
};

export default {
  getById,
  create,
  getByUsername,
};
