class Superclass {
  //
  constructor (isSuper: boolean = true) {}

  sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass { }

const myFunc = (obj: Superclass) => {
  obj.sayHello();
}

const superClass = new Superclass();
const subClass = new Subclass();

myFunc(superClass);
myFunc(subClass);