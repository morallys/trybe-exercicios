import errors from 'restify-errors';

const errorMessage = {
  required: 'is required',
  string: 'must be a string',
  number: 'must be a number',
  charactersLength: 'length must be at least 3 characters long',
  passwordLength: 'length must be at least 8 characters long',
  greaterThan: 'must be greater than or equal to 1',
};

const validateName = (name: string): never | boolean => {
  //
  if (!name || name === '') throw new errors.BadRequestError(`"name" ${errorMessage.required}`);
  if (typeof name !== 'string') {
    throw new errors.UnprocessableEntityError(`"name" ${errorMessage.string}`);
  }
  if (name.length < 3) {
    throw new errors.UnprocessableEntityError(`"name" ${errorMessage.charactersLength}`);
  }

  return true;
};

const validateUsername = (username: string): never | boolean => {
  //
  if (!username || username === '') {
    throw new errors.BadRequestError(
      `"username" ${errorMessage.required}`,
    );
  }
  if (typeof username !== 'string') {
    throw new errors.UnprocessableEntityError(`"username" ${errorMessage.string}`);
  }
  if (username.length < 3) {
    throw new errors.UnprocessableEntityError(`"username" ${errorMessage.charactersLength}`);
  }

  return true;
};

const validateAmount = (amount: string): never | boolean => {
  //
  if (!amount || amount === '') {
    throw new errors.BadRequestError(`"amount" ${errorMessage.required}`);
  }
  if (typeof amount !== 'string') {
    throw new errors.UnprocessableEntityError(`"amount" ${errorMessage.string}`);
  }
  if (amount.length < 3) {
    throw new errors.UnprocessableEntityError(`"amount" ${errorMessage.charactersLength}`);
  }

  return true;
};

const validateClasse = (classe: string): never | boolean => {
  //
  if (!classe || classe === '') {
    throw new errors.BadRequestError(`"classe" ${errorMessage.required}`);
  }
  if (typeof classe !== 'string') {
    throw new errors.UnprocessableEntityError(`"classe" ${errorMessage.string}`);
  }
  if (classe.length < 3) {
    throw new errors.UnprocessableEntityError(`"classe" ${errorMessage.charactersLength}`);
  }

  return true;
};

const validateLevel = (level: number): never | boolean => {
  //
  if (level === undefined) {
    throw new errors.BadRequestError(`"level" ${errorMessage.required}`);
  }
  if (typeof level !== 'number') {
    throw new errors.UnprocessableEntityError(`"level" ${errorMessage.number}`);
  }
  if (level <= 0) {
    throw new errors.UnprocessableEntityError(`"level" ${errorMessage.greaterThan}`);
  }

  return true;
};

const validatePassword = (password: string): never | boolean => {
  //
  if (!password || password === '') {
    throw new errors.BadRequestError(`"password" ${errorMessage.required}`);
  }
  if (typeof password !== 'string') {
    throw new errors.UnprocessableEntityError(`"password" ${errorMessage.string}`);
  }
  if (password.length < 8) {
    throw new errors.UnprocessableEntityError(`"password" ${errorMessage.passwordLength}`);
  }

  return true;
};

export default {
  validateName,
  validateAmount,
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
};