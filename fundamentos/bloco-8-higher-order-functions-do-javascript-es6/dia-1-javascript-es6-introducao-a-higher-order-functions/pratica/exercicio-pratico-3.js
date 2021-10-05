const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (template, studentTemplate) => {
  let count_right_answers = 0;

  for (let index = 0; index < studentTemplate.length; index += 1) {
    if (studentTemplate[index] === 'N.A') {
      count_right_answers = count_right_answers;

    } else if (studentTemplate[index] === template[index]) {
      count_right_answers += 1;

    } else {
      count_right_answers -= 0.5;

    }
  }
  return `Respostas corretas: ${count_right_answers}`;
}

const answers = (template, studentTemplate, callback) => {
  return callback(template, studentTemplate);
}

console.log(answers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));