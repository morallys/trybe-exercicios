const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// NOTE - PARTE 2 - Questão 1

const insertTurn = (objeto, keyTurno, valuePeriodo) => {
  const newKey = keyTurno;
  const addPeriod = valuePeriodo;

  lesson2[newKey] = addPeriod;
}

insertTurn(lesson2, 'turno', 'noite')

// console.table(lesson2);


// NOTE - PARTE 2 - Questão 2

const showObject = (objeto) => Object.keys(objeto);

// console.log(showObject(lesson2));

// NOTE - PARTE 2 - Questão 3

const lengthObject = (objeto) => Object.keys(objeto).length;

// console.log(lengthObject(lesson2));

// NOTE - PARTE 2 - Questão 4

const valuesObject = (objeto) => Object.values(objeto);

// console.log(valuesObject(lesson2));

// NOTE - PARTE 2 - Questão 5

const allLessons = (lessons1, lessons2, lessons3) => {
  const createAllLessons = Object.assign({}, {lessons1, lessons2, lessons3});

  return createAllLessons;
};

const aLessons = allLessons(lesson1, lesson2, lesson3);

// NOTE - PARTE 2 - Questão 6

const countStudents = (obj) => {
  let qtdStudents = 0;
  for (const key in obj) {
    const element = obj[key];
    qtdStudents = qtdStudents + element.numeroEstudantes;
  }
  return qtdStudents;
}

// console.log(`Número de estudante em todas as aulas: ${countStudents(aLessons)}`);

// NOTE - PARTE 2 - Questão 7

const getValueByNumer = (obj, posicao) => {
  return Object.values(obj)[posicao];
}

// console.log(`Output: '${getValueByNumer(lesson1, 0)}'`);

//  NOTE - PARTE 2 - Questão 8

const verifyPair = (obj, keyObj, valueObj) => {
  for (const key in obj) {
    if (key === keyObj && obj[key] === valueObj) {
        return true;
    }
  }
  return false;
}


console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
console.log(verifyPair(lesson2, 'materia', 'História'));
console.log(verifyPair(lesson2, 'professor', 'Carlos'));