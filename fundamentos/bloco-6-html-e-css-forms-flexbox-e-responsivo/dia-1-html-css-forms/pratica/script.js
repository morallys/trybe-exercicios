const nomeEstados = ['', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const siglaEstado = ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

let parameter = {
  name: '',
  email: '',
  cpf: '',
  endereco: '',
  estado: '',
  cidade: '',
  imovel: '',
  resumo: '',
  name_cargo: '',
  descricao_cargo: '',
  inicio: ''
}

const selectEstados = document.querySelector('#select-group');

for (let index = 0; index < nomeEstados.length; index += 1) {
  const opcao = document.createElement('option');
  opcao.value = siglaEstado[index];
  opcao.innerText = nomeEstados[index];

  selectEstados.appendChild(opcao);
}

function testData() {
  const inputData = document.getElementById('input-data-inicio').value;

  const dia = parseInt(inputData.substr(0, 2));
  const mes = parseInt(inputData.substr(3, 2));
  const ano = parseInt(inputData.substr(6));
  let data;

  if (dia > 0 && dia <= 31) {
    if (mes > 0 && mes <= 12) {
      if (ano > 1900 && ano <= 2022) {
        data = (dia + '/' + mes + '/' + ano);
      }
    }
  }
  return data;
}

const button = document.getElementById('btn-enviar');

function getUserValue(event) {
  event.preventDefault();
  console.log(testData());  
}

button.addEventListener('click', getUserValue);


// utilizar para separar a url nos caracteres &&&&&& 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

// O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// Não sei se funciona, mas é uma dica para pegar a url do GEL
// https://pt.stackoverflow.com/questions/65696/como-capturar-par%C3%A2metros-passados-pela-url-usando-javascript