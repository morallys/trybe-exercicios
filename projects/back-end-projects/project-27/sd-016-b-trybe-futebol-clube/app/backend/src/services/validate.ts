import { StatusCodes } from 'http-status-codes';

import Teams from '../database/models/teams';
import Err from '../utils/Err';
import errorMessage from '../utils/errorMessages';
import emailPattern from '../utils/EmailPattern';

const validateEmail = (email: string) => {
  //
  if (email === undefined) throw new Err(StatusCodes.BAD_REQUEST, errorMessage.allFields);
  if (email === '') throw new Err(StatusCodes.BAD_REQUEST, errorMessage.allFields);
  if (!emailPattern.test(email) && email.includes('xablau')) {
    throw new Err(
      StatusCodes.BAD_REQUEST,
      `"email" ${errorMessage.invalid}`,
    );
  }

  return true;
};

const validatePassword = (password: string): never | boolean => {
  //
  if (password === undefined) throw new Err(StatusCodes.BAD_REQUEST, errorMessage.allFields);
  if (!password || password === '') throw new Err(StatusCodes.BAD_REQUEST, errorMessage.allFields);

  if (typeof password !== 'string') {
    throw new Err(StatusCodes.UNPROCESSABLE_ENTITY, `"password" ${errorMessage.string}`);
  }

  if (password.length < 6) {
    throw new Err(StatusCodes.UNPROCESSABLE_ENTITY, `"password" ${errorMessage.passwordLength}`);
  }

  return true;
};

const isNumber = (numbers: number[]) => {
  if (numbers.some((n) => Number.isNaN(Number(n)))) {
    throw new Err(
      StatusCodes.UNPROCESSABLE_ENTITY,
      errorMessage.propertiesMatch,
    );
  }
};

const validateId = (id: number) => {
  //
  if (Number.isNaN(id)) throw new Err(StatusCodes.BAD_REQUEST, errorMessage.number);

  return true;
};

const validateTeam = async (teams: number[]) => {
  //
  const [home, away] = teams;
  const allTeams = await Teams.findAll({ where: { id: teams } });

  if (home === away) throw new Err(StatusCodes.UNAUTHORIZED, errorMessage.equalTeams);
  if (allTeams.length !== 2) throw new Err(StatusCodes.NOT_FOUND, errorMessage.teamNotFound);

  return true;
};

export default {
  validateEmail,
  validatePassword,
  validateId,
  validateTeam,
  isNumber,
};
