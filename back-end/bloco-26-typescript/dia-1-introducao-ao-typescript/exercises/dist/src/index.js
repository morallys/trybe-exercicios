"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercises_1 = __importDefault(require("./exercises"));
console.log(exercises_1.default.greeter('Maria'));
console.log(exercises_1.default.personAge('Maria', 40));
console.log(`A soma do array é igual a ${exercises_1.default.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${exercises_1.default.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${exercises_1.default.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${exercises_1.default.triangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${exercises_1.default.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${exercises_1.default.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${exercises_1.default.square(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${exercises_1.default.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${exercises_1.default.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${exercises_1.default.rectangle(100, 200)}cm²`);
console.log(`Losango de diagonal maior 32cm e diagona menor 18cm: ${exercises_1.default.lozenge(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagona menor 50cm: ${exercises_1.default.lozenge(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagona menor 25cm: ${exercises_1.default.lozenge(75, 25)}cm²`);
console.log(`Trapézio de base maior 100cm, base menor 70cm e com altura 50cm: ${exercises_1.default.trapezoid(100, 70, 50)}cm²`);
console.log(`Trapézio de base maior 75cm, base menor 50cm e com altura 35cm: ${exercises_1.default.trapezoid(75, 50, 35)}cm²`);
console.log(`Trapézio de base maior 150cm, base menor 120cm e com altura 80cm: ${exercises_1.default.trapezoid(150, 120, 80)}cm²`);
console.log(`Círculo de raio 25cm tem área de: ${exercises_1.default.circle(25)}cm²`);
console.log(`Círculo de raio 100cm tem área de: ${exercises_1.default.circle(100)}cm²`);
console.log(`Círculo de raio 12,5cm tem área de: ${exercises_1.default.circle(12.5)}cm²`);