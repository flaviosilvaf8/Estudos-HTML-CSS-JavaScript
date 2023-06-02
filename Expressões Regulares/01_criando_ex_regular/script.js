const reg1 = new RegExp ('bola');

console.log(reg1.test("bola")); //mostrara true, pois tem bola dentro da string
console.log(reg1.test('não')); //dara falso pois não tem bola dentro da string

//outra forma de criar expressão regular

const reg2 = /bola/;

console.log(reg1.test("bola")); 
console.log(reg1.test('não'));