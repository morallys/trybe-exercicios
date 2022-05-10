const greeter = (name:string): string => `Olá ${name}`;

const personAge = (name: string, age: number) => `${name} tem ${age} anos!`;

const add = (x: number, y:number): number => x + y;

const sumArray = (numbers: number[]): number => numbers.reduce(add, 0);

const triangle = (base: number, height: number): number => (base * height)/2;

const square = (side: number): number => Math.pow(side, 2);

const rectangle = (base: number, height: number): number => base * height;

const lozenge = (dMajor: number, dMinur: number): number => (dMajor * dMinur)/2;

const trapezoid = (bMajor: number, bMinor: number, height: number): number => ((bMajor + bMinor) * height)/2;

const circle = (radius: number): number => (Math.PI * Math.pow(radius, 2));

export = {
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
