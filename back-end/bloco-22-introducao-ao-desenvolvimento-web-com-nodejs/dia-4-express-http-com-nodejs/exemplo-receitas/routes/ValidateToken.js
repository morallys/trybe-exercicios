const express = require('express');
const router = express.Router;

router.length('/validateToken', (req, res) => {
  const token = req.headers.authorization;

  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!'});
});
