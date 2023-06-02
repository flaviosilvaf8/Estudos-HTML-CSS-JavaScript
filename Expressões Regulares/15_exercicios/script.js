/*Regex que valida usuario

const usuario = /(?=.{3,16})[a-z0-9-/]/;

console.log(usuario.test('flavio_15'));*/


/*Regex que valida IP de servidor

const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIp.test('127.0.0.1'));// true
console.log(validaIp.test('127.168.0.1')); // true 
console.log(validaIp.test('197.168.355.1'));// true
console.log(validaIp.test('127.1234.1234.12344'));// false*/


/*Regex que valida marca

const marca = /Marca: (Nike|Adidas|Puma)/;

console.log(marca.test('Marca: Nike'));// true 
console.log(marca.test('Marca: Asics'));// false*/


/*Regex que valida o ID

let recebeId = /\d+ID\b/; \b ira garantir que o ID seja o ultimo digito

console.log(recebeId.test('37473283ID'));// true 
console.log(recebeId.test('37473283'));// false 
console.log(recebeId.test('shudufgvb'));// false*/


/*Regex que só aceita maiuscula

let maiuscula = /[A-Z]/;

console.log(maiuscula.test("D"));
console.log(maiuscula.test("a"));
console.log(maiuscula.test("Acd"));*/