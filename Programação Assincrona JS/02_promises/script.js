let valorFinal = Promise.resolve(6);// promessa é um 6

console.log(valorFinal);// imprimira o objeto no console.

valorFinal.then((value) => {return value + 4})//recebera o valor da promessa que é 6 + 4
.then((value) => {console.log(value)});// imprimira 10 no console




