const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (!price || price === '') return res.status(400).json({ message: 'O campo "price" é obrigatório' });
  if (typeof price !== 'number') return res.status(400).json({ message: 'O preço deve ser um número!' });
  if (price < 0) return res.status(400).json({ message: 'O preço não pode ser menor do que 0'});

  next();
}

module.exports = validatePrice;
