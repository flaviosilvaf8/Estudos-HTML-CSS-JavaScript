/*Função que recebe um numero e imprime apenas numeros pares

function imprimePar(num) {
    for(let i =  num; i >= 0; i--){
        if(i % 2 == 0){
          console.log(i);  
        }      
    }
}

imprimePar(10); */


/*Função que faz a potencia de dois numeros;

function potencia(a, b) {
    return Math.pow(a, b);
}

console.log(potencia(3,2));*/


/*Função que recebe um texto, se for maior que 10 caracteres imprime uma frase, se for menor, imprime outra.

function textoString(texto) {
    if (texto.lenght > 10) {
        console.log("Texto muito grande");
    } else{
        console.log("Texto dentro do limite");
    }
}

textoString("Shalaia");*/


/*Função que recebe numero negativo e transforma em positivo

function negativeNumber (num) {
    return Math.abs(num);
}

console.log(negativeNumber(-12));
console.log(negativeNumber(-15));*/


/* Função que recebe um dado e diz qual o tipo do dado.

function tipoVar (type) {

    if(typeof type === 'string') {
        console.log("Trata-se de uma string.")
    } else if (typeof type === 'number'){
        console.log("Trata-se de um number")
    } else{
        console.log("Trata-se de um boolean")
    }
    
}

tipoVar(true);
tipoVar(12);
tipoVar("Ola mundo");*/


/*Função que recebe uma idade, se maior que 18 pode entrar, se não, não pode.

function autoEscola(idade){
    if(idade >= 18) {
        console.log("você pode entrar na auto escola")
    } else {
    console.log("Você não pode entrar na auto escola.")
    }
}

autoEscola(17)*/


/*Função que retorne um numero aleatorio

function numAleatorio (num) {
    return Math.floor(Math.random()*num) + 1;    
}

console.log(numAleatorio(10));*/



/*função que some dois numeros e retorne eles

function soma (a,b) {
    return a + b;
}

console.log (soma(4,8));*/


/*função que recebe idade e imprima no console com template literals

function imprimeIdade (idade) {
    console.log(`Você tem ${idade} anos`);
}

imprimeIdade(22);*/



/*Função que escreva Hello World!

function olaMundo () {
    console.log("Hello World!");
}

olaMundo();*/