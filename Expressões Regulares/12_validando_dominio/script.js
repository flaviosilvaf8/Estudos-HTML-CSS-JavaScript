let validaDominio = /www.\w+\.com.br|.com/;// validando o dominio de um site

console.log(validaDominio.test("www.google.com"));// true
console.log(validaDominio.test("www.horadecodar.com.br"));// true
console.log(validaDominio.test("www.google"));// false
