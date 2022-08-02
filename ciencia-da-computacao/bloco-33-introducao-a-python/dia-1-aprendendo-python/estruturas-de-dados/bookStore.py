def bookStore(qtdBooks):
  book = 24.20
  bookStorePrice = book - (book * 0.4)
  shippingDefault = 3.00
  shippingMultipleBooks = 0.75

  if qtdBooks == 1:
    cart = bookStorePrice + shippingDefault

  else:
    cart = (bookStorePrice * qtdBooks) + shippingDefault + (shippingMultipleBooks * (qtdBooks - 1))

  return print('Valor do carrinho: ', round(cart, 2))

bookStore(60)
