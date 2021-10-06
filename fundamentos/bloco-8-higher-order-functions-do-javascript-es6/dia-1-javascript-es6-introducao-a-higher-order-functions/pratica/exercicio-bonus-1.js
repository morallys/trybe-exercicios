const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  minDamage = 15;
  return Math.floor(Math.random() * ((dragon.strength + 1) - minDamage) + minDamage);
}

const warriorDamage = () => {
  minDamage = warrior.strength;
  return Math.floor(Math.random() * (((warrior.strength * warrior.weaponDmg) + 1) - minDamage) + minDamage);
}

const mageAttack = () => {
  const minAttack = mage.intelligence;
  const maxAttack = mage.intelligence * 2;
  let mageMana;

  if (mage.mana <= 15) {
    alert('Não possui mana suficiente');
    // mage.mana = 0;
    mageMana = 0;
  } else {
    // mage.mana -= 15;
    mageMana = 15;
  }

  const attack = {
    damage: Math.floor(Math.random() * ((maxAttack + 1) - minAttack) + minAttack),
    mana: mageMana,
  }

  return attack;
}

const gameActions = {
  warriorTurn: (callback) => {
    const callWarrior = callback();
    dragon.healthPoints -= callWarrior;
    warrior.damage = callWarrior;
  },
  mageTurn: (callback) => {
    const callMage = callback();
    dragon.healthPoints -= callMage;
    mage.damage = call
  }
}

