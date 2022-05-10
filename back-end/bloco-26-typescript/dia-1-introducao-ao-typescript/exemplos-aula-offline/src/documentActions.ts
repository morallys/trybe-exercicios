enum documentActions {
  salvar = 1,
  imprimir,
  abrir,
  visualizar,
  fechar
}

// FIXME -- Tirar dúvida na monitoria // Por que mesmo estando explicitamente com number, os números são de typeof 'string'?

for (let key in documentActions) {
  // if (typeof key == 'number') console.log(key);
  if (typeof documentActions[key] == 'number') console.log(documentActions[key]);
}
