const cep = /\d{5}-\d{3}/;// CEP tem que ter 5 digitos tracinho e 3 digitos

console.log(cep.test('06075-100'));// aparecera true

const cpf = /\d{3}.\d{3}.\d{3}-\d{2}/;//padrão de cpf

console.log(cpf.test('474.184.678-42'));// true no console




