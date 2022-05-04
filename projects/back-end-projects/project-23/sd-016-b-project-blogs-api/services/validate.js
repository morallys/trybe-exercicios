const { Op } = require('sequelize');
const { Category, BlogPost } = require('../models');

const validateEmail = (email) => {
  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const errorMessage = {
    required: '"email" is required',
    empty: '"email" is not allowed to be empty',
    invalid: '"email" must be a valid email',
  };

  if (email === undefined) return { valid: false, message: errorMessage.required };
  if (email === '') return { valid: false, message: errorMessage.empty };
  if (!emailPattern.test(email)) return { valid: false, message: errorMessage.invalid };

  return { valid: true };
};

const validatePassword = (password) => {
  //
  const errorMessage = {
    required: '"password" is required',
    empty: '"password" is not allowed to be empty',
    charactersLength: '"password" length must be 6 characters long',
  };

  if (password === undefined) return { valid: false, message: errorMessage.required };
  if (password === '') return { valid: false, message: errorMessage.empty };
  if (password.length !== 6) return { valid: false, message: errorMessage.charactersLength };

  return { valid: true };
};

const validateDisplayName = (displayName) => {
  //
  const errorMessage = '"displayName" length must be at least 8 characters long';

  if (displayName.length < 8) return { valid: false, message: errorMessage };

  return { valid: true };
};

const validateCategory = (name) => {
  //
  const errorMessage = '"name" is required';

  if (!name || name === '') return { valid: false, message: errorMessage };

  return { valid: true };
};

const validateTitle = (title) => {
  //
  const errorMessage = '"title" is required';

  if (!title || title === '') return { valid: false, message: errorMessage };

  return { valid: true };
};

const validateContent = (content) => {
  //
  const errorMessage = '"content" is required';

  if (!content || content === '') return { valid: false, message: errorMessage };

  return { valid: true };
};

const validateCategoryId = (categoryIds) => {
  //
  const errorMessage = '"categoryIds" is required';

  if (!categoryIds || categoryIds === '' || categoryIds.length === 0) {
    return { valid: false, message: errorMessage };
  }

  const testCategory = categoryIds.every((category) => typeof category === 'number');

  if (!testCategory) return { valid: false, message: errorMessage };

  return { valid: true };
};

const validateCategoryExists = async (categoryIds) => {
  //
  const errorMessage = '"categoryIds" not found';

  const promises = categoryIds.map((c) => Category.findOne({ where: { id: c } }));

  const checkCategoryIsValid = await Promise.all(promises);

  const testCategory = checkCategoryIsValid.some((c) => c === null);

  if (testCategory) return { valid: false, message: errorMessage };

  return { valid: true };
};

const validatePostId = async (id) => {
  //
  const errorMessage = 'Post does not exist';

  const checkPost = await BlogPost.findByPk(id);

  if (!checkPost) return { valid: false, message: errorMessage };

  return { valid: true };
};

const validateUser = async (idUserReq, idPostReq) => {
  //
  const errorMessage = 'Unauthorized user';

  const checkUser = await BlogPost.findOne({
    where: {
      [Op.and]: [
        { id: idPostReq },
        { userId: idUserReq },
      ],
    },
  });

  if (!checkUser) return { valid: false, message: errorMessage };

  return { valid: true };
};

const validateCategoryInReq = (categoryIds) => {
  //
  const errorMessage = 'Categories cannot be edited';

  if (categoryIds || categoryIds === '') return { valid: false, message: errorMessage };

  return { valid: true };
};

module.exports = {
  validateEmail,
  validatePassword,
  validateDisplayName,
  validateCategory,
  validateTitle,
  validateContent,
  validateCategoryId,
  validateCategoryExists,
  validatePostId,
  validateUser,
  validateCategoryInReq,
};
