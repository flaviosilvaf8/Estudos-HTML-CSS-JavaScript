let validandoEmail = /\w+@\w+\.\w+/;// validando email

console.log(validandoEmail.test('flaviosilva@gmail.com'));
console.log(validandoEmail.test('flaviosilva.freitas@outlook.com'));
console.log(validandoEmail.test('flaviofreitas@yahoo.com'));

//todas aparecerão true