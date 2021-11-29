const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const calculatedAverage = (grade) => {
  const sum = grade.reduce((acc, nota) => {
    return acc + nota;
  }, 0);

  return sum/5;
}

const studentAverage = (arrStudents, arrGrades) => {
  // escreva seu código aqui
  const mountObjStudent = arrStudents.map((student, index) => {

    const objStudent = {
      name: student,
      average: calculatedAverage(arrGrades[index])
    }
    return objStudent;
  });
  return mountObjStudent;
}

console.log(studentAverage(students, grades));