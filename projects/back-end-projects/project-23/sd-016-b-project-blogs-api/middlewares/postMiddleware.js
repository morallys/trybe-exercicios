const {
  validateTitle,
  validateContent,
  validateCategoryId,
  validateCategoryExists,
  validatePostId,
  validateUser,
  validateCategoryInReq,
} = require('../services/validate');

const verifyTitle = (req, res, next) => {
  //
  const { title } = req.body;

  const validate = validateTitle(title);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  next();
};

const verifyContent = (req, res, next) => {
  //
  const { content } = req.body;

  const validate = validateContent(content);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  next();
};

const verifyCategoryId = (req, res, next) => {
  //
  const { categoryIds } = req.body;

  const validate = validateCategoryId(categoryIds);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  next();
};

const verifyCategoryExists = async (req, res, next) => {
  //
  const { categoryIds } = req.body;

  const validate = await validateCategoryExists(categoryIds);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  next();
};

const verifyPostId = async (req, res, next) => {
  //
  const { id } = req.params;

  const validate = await validatePostId(id);

  if (!validate.valid) return res.status(404).json({ message: validate.message });

  next();
};

const verifyUser = async (req, res, next) => {
  //
  const { id: idUserReq } = req.user;
  const { id: idPostReq } = req.params;

  const validate = await validateUser(idUserReq, idPostReq);

  if (!validate.valid) return res.status(401).json({ message: validate.message });

  next();
};

const verifyCategoryInReq = async (req, res, next) => {
  //
  const { categoryIds } = req.body;

  const validate = validateCategoryInReq(categoryIds);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  next();
};

module.exports = {
  verifyTitle,
  verifyContent,
  verifyCategoryId,
  verifyCategoryExists,
  verifyPostId,
  verifyUser,
  verifyCategoryInReq,
};