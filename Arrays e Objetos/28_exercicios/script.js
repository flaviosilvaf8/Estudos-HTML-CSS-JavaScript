/*criar um objeto calculadora com o metodo return e imprimir as quatro funções no console.

let calculadora = {

   soma: function(a, b) {
    return a + b;
   },
   subtrair: function(a, b) {
    return a - b;
   },
   multiplicar: function(a, b) {
    return a * b;
   },
   dividir: function(a, b) {
    return a / b;
   }
}
console.log(calculadora.soma(3,4))
console.log(calculadora.subtrair(10,5))
console.log(calculadora.multiplicar(12,2))
console.log(calculadora.dividir(15,2))*/


/*Transforma uma frase em Array e depois mostre a frase no console, cada palavra por um loop

let frase = "O rato roeu a roupa do rei de roma"

let arrFrase = frase.split(" ");

for(let i = 0; i < arrFrase.length; i++) {
    console.log(arrFrase[i]);
}*/


/*Cria JSON com informações e transforme em string, mostre no console.

let pessoa = {
    "nome": "Flavio",
    "idade": 22,
    "profissão": "Programador"
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissão);*/


/*fazer um array e iterar todos eles por um loop

let nums = [1,2,3,4] 

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}*/



/* Cria 2 array um com mais de 5 e outro com menos elementos, se tiver mais que 5 imprimir uma mensagem, se tiver menos imprimir outra mensagem

let nums = [0,1,2,3,4,5,6]
let boleano = [true, false]

function numElementos (arr) {
    if (arr.length > 5) {
        console.log("Muitos elementos")
    }else{
        console.log("Poucos elementos")
    }
}

numElementos(nums)
numElementos(boleano)*/



/*crie um array com 5 nosmes, ver se o seu nome esta no array

let nomes = ["Carlos", "João", "Flavio", "Marcelo", "Paulo"]

if(nomes.includes("Flavio")) {
    console.log("Seu nome esta aqui")
}else{
    console.log("Não vejo seu nome")
}*/


/*adicione janelas no onibus com valor 20, delete rodas, imprima janela no console

let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2       
}

onibus.janelas = 20

delete onibus.rodas

console.log(onibus.janelas)

console.log(onibus.rodas)*/


/*crie um objeto onibus, com propriedades e imprima no console

let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
}

console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.portas);*/


/*criar 2 arrays e mostrar no console quantos elementos tem em cada array

let nums = [0,1]
let nomes = ["Flavio", "Paulo", "Moises", "Abedenego"]

console.log(nums.length)
console.log(nomes.length)


/*Criar Array e mostrar o item 1, 3 e 4

let carros = ["BMW", "LandRover", "Fiat", "Porshe", "VW"]

console.log(carros[0]);
console.log(carros[2]);
console.log(carros[3]);*/