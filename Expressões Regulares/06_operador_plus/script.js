const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test('12345'));// true, pois o operador plus permitira um ou mais numeros
console.log(umOuMaisNumeros.test('1'));// true
console.log(umOuMaisNumeros.test('asb'));// false
