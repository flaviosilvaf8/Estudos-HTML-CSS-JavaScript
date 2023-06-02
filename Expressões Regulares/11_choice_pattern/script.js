let carro = /\w+: (bmw|toyota|honda)/;// regex que retorna true somente nas marcas de carros citadas, as mesmas foram separadas pelo choice pattern '|'

console.log(carro.test('carro: bmw'));//true
console.log(carro.test('carro: honda'));//true
console.log(carro.test('carro: toyota'));//true
console.log(carro.test('carro: fiat'));//false
