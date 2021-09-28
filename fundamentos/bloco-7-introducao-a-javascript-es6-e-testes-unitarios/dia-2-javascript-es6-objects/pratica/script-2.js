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

const allLessons = (objeto1, objeto2, objeto3) => {
  const createAllLessons = Object.assign({}, {objeto1, objeto2, objeto3});

  return createAllLessons;
};

console.log(allLessons(lesson1, lesson2, lesson3));