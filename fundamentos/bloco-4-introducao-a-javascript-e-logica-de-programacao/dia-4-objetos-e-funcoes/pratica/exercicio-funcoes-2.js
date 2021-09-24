function maiorNumero(array) {

    let indexBigger = 0;
    
    for (const key in array) {
        if (array[indexBigger] < array[key]) {
     
            indexBigger = key;            
        }    
    }         

    return console.log(indexBigger);
}

let teste = [2,3,6,7,10,1];

maiorNumero(teste);