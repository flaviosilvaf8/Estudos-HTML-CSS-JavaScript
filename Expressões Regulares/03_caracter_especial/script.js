const pontoRegex = /./; //como o ponto serve como um coringa ele imprimira true em tudo oque fizermos

console.log(pontoRegex.test('aggs'));//true
console.log(pontoRegex.test('  '));//true
console.log(pontoRegex.test('65446'));//true


const dRegex = /\d/; //o contrabarra d só aceitara numeros

console.log(dRegex.test('aggs'));//false
console.log(dRegex.test('  '));//false
console.log(dRegex.test('65446'));//true


const DRegex = /\D/; // D maiusculo só aceita strings onde tenha letras ou só espaço conforme abaixo

console.log(DRegex.test('aggs'));//true
console.log(DRegex.test('  '));//true
console.log(DRegex.test('65446'));//false


const sRegex = /\s/; //não aceita digito, nesse caso só o "  ", dará true.

console.log(sRegex.test('aggs'));//false
console.log(sRegex.test('  '));//true
console.log(sRegex.test('65446'));//false



const wRegex = /\w/; //Só aceita alfanumerico

console.log(wRegex.test('aggs'));//true
console.log(wRegex.test('  '));//false
console.log(wRegex.test('65446'));//true








