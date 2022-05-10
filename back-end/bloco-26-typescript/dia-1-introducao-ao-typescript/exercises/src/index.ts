import Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango de diagonal maior 32cm e diagona menor 18cm: ${Exercise.lozenge(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagona menor 50cm: ${Exercise.lozenge(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagona menor 25cm: ${Exercise.lozenge(75, 25)}cm²`);

console.log(`Trapézio de base maior 100cm, base menor 70cm e com altura 50cm: ${Exercise.trapezoid(100, 70, 50)}cm²`);
console.log(`Trapézio de base maior 75cm, base menor 50cm e com altura 35cm: ${Exercise.trapezoid(75, 50, 35)}cm²`);
console.log(`Trapézio de base maior 150cm, base menor 120cm e com altura 80cm: ${Exercise.trapezoid(150, 120, 80)}cm²`);

console.log(`Círculo de raio 25cm tem área de: ${Exercise.circle(25)}cm²`);
console.log(`Círculo de raio 100cm tem área de: ${Exercise.circle(100)}cm²`);
console.log(`Círculo de raio 12,5cm tem área de: ${Exercise.circle(12.5)}cm²`);
