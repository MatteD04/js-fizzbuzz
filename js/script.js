//stampare i numeri da 1 a 1000
//se il numero è divisibile per 3 scrivere fizz
//se il numero è divisibile per 5 scrivere buzz
//se il numero è divisibile per entrambi scrivere fizzbuzz

// stampare i numeri da 1 a 1000
const numbContainer = document.querySelector('#numbers-container');

for(let i = 1; i <= 100; i++) {
    // Per ogni numero: 
    // stabilire se è divisibile per 3 e per 5
    let numberState;
    let numbBox
    if(i % 3 === 0 && i % 5 === 0) {
        numberState = 'FizzBuzz';
        numbBox = 'fizzbuzz';
    } else if(i % 3 === 0) {
        numberState = 'Fizz';
        numbBox = 'fizz'
    } else if(i % 5 === 0) {
        numberState = 'Buzz';
        numbBox = 'buzz';
    } else {
        numberState = i;
        numbBox = 'number';
    }
    // Stampare in console: numero - pariodispari
    console.log(i + ' - ' + numberState);

    //scrivere in HTML i numeri
    const divLi = `<div class="box ${numbBox}">${numberState}</div>`;
    numbContainer.innerHTML += divLi;
}