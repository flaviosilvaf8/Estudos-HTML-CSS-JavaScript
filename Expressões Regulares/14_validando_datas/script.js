let validarDatasNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDatasNasc.test('28/06/2000'));// true
console.log(validarDatasNasc.test('28/06'));// false
console.log(validarDatasNasc.test('28 de junho'));// false