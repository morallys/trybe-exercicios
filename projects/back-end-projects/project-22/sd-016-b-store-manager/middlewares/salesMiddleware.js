const verifyProductId = (req, res, next) => {
  //
  const { body } = req;

  const errorMessage = {
    required: '"productId" is required',
  };

  const productIdIsInvalid = body.some(({ productId }) => (!productId || productId === ''));

  if (productIdIsInvalid) return res.status(400).json({ message: errorMessage.required });

  next();
};

const verifyQuantity = (req, res, next) => {
  const { body } = req;

  const errorMessage = {
    required: '"quantity" is required',
    lessThan: '"quantity" must be greater than or equal to 1',
  };

  const quantityIsInValid = body
    .some(({ quantity }) => (!quantity || quantity === '' || typeof quantity !== 'number'));
  const quantityInvalidLength = body.some(({ quantity }) => quantity < 1);

  if (quantityIsInValid) return res.status(400).json({ message: errorMessage.required });
  if (quantityInvalidLength) return res.status(422).json({ message: errorMessage.lessThan });

  next();
};

module.exports = {
  verifyProductId,
  verifyQuantity,
};