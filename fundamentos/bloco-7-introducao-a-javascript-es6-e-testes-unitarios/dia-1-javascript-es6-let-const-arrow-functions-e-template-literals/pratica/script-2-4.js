// NOTE - Primeira função verifica se existe a letra X e substitui por uma string passada por parâmetro. E retorna uma nova string com o valor substituido.
// Segunda função, chama a primeira função passando a nova string já construída e a string de skills ordenada alfabeticamente. E retorna essa união.

const strSkills = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Linux'];

const strSearch = (param) => {
  const str = 'Tryber x aqui!';
  const newStr = str.replace(/x/i, param);

  return newStr;
}

const strFull = (strParam, skills) => {
  const newStr = (`${strParam} Minhas cinco principais habilidades são: ${skills}`)

  return newStr;
}

console.log(strFull(strSearch('Bebeto'), strSkills.sort()));