const { dateValidate } = require('./DateValidate');

const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

const validateEmail = (email) => {
  //
  if (email === '' || !email) {
    return { valid: false, message: 'O campo "email" é obrigatório' };
  }

  if (!emailPattern.test(email)) {
    return { valid: false, message: 'O "email" deve ter o formato "email@email.com"' };
  }

  return { valid: true, message: 'E-mail é válido' };
};

const validatePassword = (password) => {
  //
  if (password === '' || !password) {
    return { valid: false, message: 'O campo "password" é obrigatório' };
  }

  if (password.length < 6) {
    return { valid: false, message: 'O "password" deve ter pelo menos 6 caracteres' };
  }

  return { valid: true, message: 'Password é válido' };
};

const validateToken = (req, res, next) => {
  //
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (token.length < 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  next();
};

const validateName = (req, res, next) => {
  //
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const validateAge = (req, res, next) => {
  //
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk || talk === '') {
    return res.status(400).json({
      message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
};

const validateWatchedAt = (req, res, next) => {
  //
  const { talk } = req.body;

  if (!talk.watchedAt) {
    return res.status(400).json({
      message:
      'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  const testDate = dateValidate(talk.watchedAt);

  if (!testDate.valid) {
    return res.status(400).json({ message: testDate.message });
  }

  next();
};

const testRate = (talk) => {
  if (!talk.rate && talk.rate !== 0) {
    return true;
  }

  return false;
};

const validateRate = (req, res, next) => {
  const { talk } = req.body;

   if (testRate(talk)) {
     return res.status(400).json({
       message:
         'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
     });
   }

  if (talk.rate < 1 || talk.rate > 5) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  next();
};

module.exports = {
  validateEmail,
  validatePassword,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};

// NOTE - Base da Validação de e-mail tirada do seguinte site: https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469
