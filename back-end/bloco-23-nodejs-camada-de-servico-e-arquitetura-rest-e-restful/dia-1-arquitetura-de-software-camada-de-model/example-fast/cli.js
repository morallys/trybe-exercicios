const readLine = require('readline-sync');
const userModel = require('./userModel');

const start = async () => {
  const userName = readLine.question('Digite seu nome de usuário: ');
  const user = await userModel.getUser(userName);

  if (!user) return console.log('Usuário não encontrado');

  console.log('Aqui estão os dados do usuário');
  console.log(user);
}

start();