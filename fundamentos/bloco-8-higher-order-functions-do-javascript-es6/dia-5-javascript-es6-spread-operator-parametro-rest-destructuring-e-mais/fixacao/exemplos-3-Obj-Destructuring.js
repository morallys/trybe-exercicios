const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// const productCopy = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const {name: produto, price, seller} = product ;

// console.log(produto, price, seller);

// ----------------------------------------------

const printProductDetails = (...params) => {

  const [{name, price, seller}] = params;

  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product);
