const dia = /\d\d/;// validando variavel que se trata de um dia

console.log(dia.test("05") && "05".length == 2);// se o dia digitado tiver 2 numeros retornara true no console.