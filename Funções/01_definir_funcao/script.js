//Estrutura Function >>> function nomeDaVariavel(argumento) {corpo da função}

function escreverNoConsole() { //define a função com a palavra function, depois colocar o nome da função, depois entre parenteses
    console.log("Ola Mundo!"); // nada sera impresso no console, pois a função ainda não foi chamada
}

escreverNoConsole(); // agora a função será invocada no console, não esquecer ()



function imprimirUmNumero (num) { //pedindo um numero para a função.
    console.log("O numero é " + num);
}

imprimirUmNumero(2); //o numero pedido foi passado por aqui. sera impresso todos os numeros abaixo no console. sem precisar criar outros consoles log.
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);
imprimirUmNumero(10);




function qualOnome (nome) {
    console.log("Seu nome é " + nome); //Imprimira os nomes que forem dados na função abaixo.
}

qualOnome("Flavio"); //Guardara "Flavio" dentro da variavel nome
qualOnome("João"); //Guardara "João" dentro da variavel nome
qualOnome("Carlos"); //Guardara "Carlos" dentro da variavel nome
qualOnome("Junin"); //Guardara "Junin" dentro da variavel nome

