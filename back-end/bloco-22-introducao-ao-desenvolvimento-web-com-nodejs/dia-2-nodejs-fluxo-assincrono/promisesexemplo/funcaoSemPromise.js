const calcularDivisao = (num1, num2) => {
  if (num2 === 0) throw new Error('Não pode ser feito uma divisão por zero.')

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(6, 2);

  console.log("resultado: %s", resultado);

} catch (error) {
  console.log("erro: %s", error.message);
}