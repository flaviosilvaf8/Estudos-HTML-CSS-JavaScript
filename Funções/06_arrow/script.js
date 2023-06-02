// Estrutura arrow >>> let nomeDaVariavel = (argumento) => {corpo da função}

let consoleTeste = () => {
    console.log("Ola Mundo!"); //imprimira "ola mundo" no console, quando chamarmos a função
};

consoleTeste(); //Chamando função

let soma = (a,b) => {
    return a + b; // somando a + b
};

console.log(soma(5,5)); // chamando a função e inserindo os numeros nas variaveis de acordo a ordem (primeiro a e depois b)