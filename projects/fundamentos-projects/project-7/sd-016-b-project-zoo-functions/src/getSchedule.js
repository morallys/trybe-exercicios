const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

// REVIEW - Função que retorna um objeto com as informações de todos os animais cadastrados e suas respectivas disponibilidades. Caso receba o dia 'Monday', imprime mensagem direta informando que o zoo está fechado. Caso seja algum outro dia da semana, no novo objeto criado pelo reduce(), insere chaves officeHour e exhibition, injetando as informações correspondentes a horário e animais disponíveis em cada dia, respectivamente.

const objSchedule = (arrDay) =>
  species.reduce((acc) => {
    if (arrDay[0] === 'Monday') {
      acc.officeHour = 'CLOSED';
      acc.exhibition = 'The zoo will be closed!';
    } else {
      const { close, open } = arrDay[1];

      acc.officeHour = `Open from ${open}am until ${close}pm`;

      acc.exhibition = species
        .filter((specie) => specie.availability
          .find((dayExhibition) => dayExhibition === arrDay[0]))
        .map((objAnimal) => objAnimal.name);
    }

    return acc;
  }, {});

// REVIEW - Função que organiza alguns parâmetros para impressão do objeto com as informações de todos os animais. Busca o array de horas de disponibilidade do zoo, chama a função objSchedule (que é a sua auxiliar), cria novo objeto passando a chave correspondente ao dia da semana, e após isso chama a função auxiliar objSchedule() para criação do objeto com todas as informações dos animais e suas disponibilidades.

const getAllSchedule = () => {
  const arrHours = Object.entries(data.hours);
  const objAnimals = arrHours.reduce((acc, current) => {
    acc[current[0]] = objSchedule(current);
    return acc;
  }, {});

  return objAnimals;
};

// REVIEW - Função que retorna a mensagem padrão para informar que o zoo está fechado.

const getMonday = () => ({
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
});

// REVIEW - Função que retorna o objeto correspondente ao dia da semana passado por parâmetro, exceto o Monday.

const getDay = (target) => {
  const { open, close } = data.hours[target];

  return {
    [target]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: species
        .filter((specie) => specie.availability
          .find((dayExhibition) => dayExhibition === target))
        .map((objAnimal) => objAnimal.name),
    },
  };
};

// REVIEW - Função que verifica o dia que será retornado de acordo com o parâmetro recebido. Caso seja 'Monday', invoca a função, getMonday(). Caso seja qualquer outro dia da semana, invoca a função getDay().

const getSchedulePerDay = (target, arrHours) => {
  let objReturn;
  if (target === 'Monday') {
    objReturn = getMonday();
  } else {
    arrHours.find((day) => {
      if (day === target) {
        objReturn = getDay(target);
      }
      return false;
    });
  }
  return objReturn;
};

// REVIEW - Função que encontra o animal passado por parâmetro e retorna o array que corresponde aos dias que está disponível para visitação.

const getScheduleAnimal = (target) => species.find((specie) => specie.name === target).availability;

// REVIEW - Função que verifica se o parâmetro é correspondente a um dia ou se é um animal. Após verificação, invoca a função que corresponderá a cada uma para devida impressão.

const getPrint = (target, arrHours) => {
  if (arrHours.some((element) => element === target)) {
    return getSchedulePerDay(target, arrHours);
  }
  return getScheduleAnimal(target);
};

// REVIEW - Função que verifica se é um parâmetro válido, e se for, chama a função getPrint() para impressão das condições, se for um parâmetro inválido chama a função para impressão padrão do cronograma do zoo.

const isDayOrAnimal = (target) => {
  const arrHours = Object.keys(data.hours);

  const testTarget = species.some((specie, index) => {
    if (target === specie.name || target === arrHours[index]) {
      return true;
    }
    return false;
  });

  if (testTarget) {
    return getPrint(target, arrHours);
  }
  return getAllSchedule();
};

// REVIEW - Função principal verifica se existe ou não parâmetros recebidos, e invoca as funções para resolução da questão. Caso algum parâmetro seja recebido, retorna a função isDayOrAnimal(). Caso não seja recebido nenhum parâmetro, é invocada a função getAllSchedule().

function getSchedule(scheduleTarget) {
  if (scheduleTarget) {
    return isDayOrAnimal(scheduleTarget);
  }
  return getAllSchedule();
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
