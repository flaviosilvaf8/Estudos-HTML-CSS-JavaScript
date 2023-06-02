let reg1 = /[1,2,3,4,5,6]/;

console.log(reg1.test("temos o numero 6?"))// mostrara true no console, pois temos o numero 6 no nosso conjunto;

let reg2 = /[0-9]/;

console.log(reg2.test("Temos 76462728361?"));// mostrara true porque temos todos esses numeros no nosso conjunto;