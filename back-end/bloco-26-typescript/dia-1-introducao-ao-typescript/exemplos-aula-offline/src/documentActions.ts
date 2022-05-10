enum documentActions {
  salvar = 1,
  imprimir,
  abrir,
  visualizar,
  fechar
}

for (let key in documentActions) {
  if (typeof documentActions[key] == 'number') console.log(documentActions[key]);
}
