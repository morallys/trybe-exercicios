const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  console.log(callback());
}

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);
