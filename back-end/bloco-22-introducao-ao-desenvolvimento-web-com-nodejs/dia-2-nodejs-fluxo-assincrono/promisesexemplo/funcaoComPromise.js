const calcularDivisao = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode ser feito uma divisão por zero.'));

    const resultado = num1/num2;

    resolve(resultado);
  });

  return promise;
}

calcularDivisao(10, 0)
  .then((result) => console.log('resultado: %s', result))
  .catch((err) => console.log('erro: %s', err.message));

// try {
//   const test = async () => {
//     const result = await calcularDivisao(10, 0);

//     console.log('resultado: %s', result);
//   }
//   test();

// } catch (error) {
//   console.log('erro: %s', error.message);
// }