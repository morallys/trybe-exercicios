import { connect } from "mongoose";

const options = {
  user: 'JM', // Usuário do banco de dados.
  pass: 'admin', // senha do usuário do banco de dados.
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'model_example', // Define qual banco de dados vou utilizar.
};

const connection = () => {
  connect('mongodb://localhost:27017/', options);
}

export default connection;