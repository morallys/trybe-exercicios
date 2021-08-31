

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    bestInTheWorld:  [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.\n' );

// player

for (const key in player) {

    console.log(player[key]);
}

let bestQtd = Object.keys(player.bestInTheWorld).length;

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + bestQtd);

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');



for (const key in player.bestInTheWorld) {
    console.log(key, ' ', player.bestInTheWorld[key]);
}


