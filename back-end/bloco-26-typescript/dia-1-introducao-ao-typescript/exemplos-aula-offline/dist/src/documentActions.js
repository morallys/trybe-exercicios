"use strict";
var documentActions;
(function (documentActions) {
    documentActions[documentActions["salvar"] = 1] = "salvar";
    documentActions[documentActions["imprimir"] = 2] = "imprimir";
    documentActions[documentActions["abrir"] = 3] = "abrir";
    documentActions[documentActions["visualizar"] = 4] = "visualizar";
    documentActions[documentActions["fechar"] = 5] = "fechar";
})(documentActions || (documentActions = {}));
// FIXME -- Tirar dúvida conceitual na monitoria // Por que mesmo estando explicitamente com number, os números são de typeof 'string'?
// Segunda dúvida, na aula de ontem o Mazer falou sobre multi tipos em um só constante, exemplo:
// const test: number|string = '1'
for (let key in documentActions) {
    console.log(typeof documentActions[key]);
    // if (typeof key == 'number') console.log(key);
    // if (typeof documentActions[key] == 'number') console.log(documentActions[key]);
}
