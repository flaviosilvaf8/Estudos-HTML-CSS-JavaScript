let notAB = /^ab/;// regex que nega a letra 'a' e a letra 'b', isoladas

console.log(notAB.test('a'));// retornara falso, a isolado
console.log(notAB.test('ab'));// retornara true pois não estão isolados
console.log(notAB.test('b'));// retornara falso, b isolado


let notAtoZ = /[^a-z]/;// regex que vai negar todas as letras de 'a' até 'z'

console.log(notAtoZ.test('ahabay'));// falso no console
console.log(notAtoZ.test('bhdh'));// falso no console
console.log(notAtoZ.test('shalaia'));// falso no console

