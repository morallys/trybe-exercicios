"use strict";
const greeter = (name) => `Olá ${name}`;
const personAge = (name, age) => `${name} tem ${age} anos!`;
const add = (x, y) => x + y;
const sumArray = (numbers) => numbers.reduce(add, 0);
const triangle = (base, height) => (base * height) / 2;
const square = (side) => Math.pow(side, 2);
const rectangle = (base, height) => base * height;
const lozenge = (dMajor, dMinur) => (dMajor * dMinur) / 2;
const trapezoid = (bMajor, bMinor, height) => ((bMajor + bMinor) * height) / 2;
const circle = (radius) => (Math.PI * Math.pow(radius, 2));
module.exports = {
    greeter,
    personAge,
    add,
    sumArray,
    triangle,
    square,
    rectangle,
    lozenge,
    trapezoid,
    circle
};
