// NOTE - Imprime uma lista de e-mails

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList);

// ________________________________________________________________________________________________________

// Array contendo a lista de emails.
const emailList = [
  "isa@myemail.com",
  "lipe@myemail.com",
  "digo@myemail.com",
  "greg@myemail.com"
];

// Função callback que recebe o array emailList como parâmetro.
const showEmailList = (list) => {
  const div = document.querySelector("#email-list");
  div.innerHTML = '';
// Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
  list.forEach((email) => {
    const p = document.createElement("p");
    p.innerHTML = `${email} : Enviado com sucesso!`;
    div.appendChild(p);
  });
}

const btnFilter = document.querySelector("#btn-filter");
btnFilter.addEventListener("click", () => showEmailList(emailList));