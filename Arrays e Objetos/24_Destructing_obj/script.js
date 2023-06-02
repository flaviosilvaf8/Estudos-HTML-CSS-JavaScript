let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
}

const {rodas : vRodas, portas : Vportas, tetosolar : Vtetosolar}= obj; // Desconstruira os objetos em variaveis

console.log(Vportas);//Imprimira o valor da variavel no console.
console.log(vRodas);
console.log(Vtetosolar);