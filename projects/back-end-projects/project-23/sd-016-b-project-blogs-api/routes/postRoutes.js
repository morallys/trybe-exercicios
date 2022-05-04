const express = require('express');

const router = express.Router();

const postController = require('../controller/postController');
const {
  verifyTitle,
  verifyContent,
  verifyCategoryId,
  verifyCategoryExists,
  verifyPostId,
  verifyUser,
  verifyCategoryInReq,
} = require('../middlewares/postMiddleware');
const auth = require('../middlewares/auth');

router
  .get('/', auth, postController.getAll)
  .get('/search', auth, postController.searchPost)
  .get('/:id', auth, verifyPostId, postController.getById)
  .delete('/:id', auth, verifyPostId, verifyUser, postController.deletePost)
  .put(
    '/:id',
    auth,
    verifyUser,
    verifyCategoryInReq,
    verifyTitle,
    verifyContent,
    postController.updatePost,
  )
  .post(
    '/',
    auth,
    verifyTitle,
    verifyContent,
    verifyCategoryId,
    verifyCategoryExists,
    postController.createPost,
  );

module.exports = router;