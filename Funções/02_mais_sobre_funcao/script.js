function multiplicarTresNumeros (x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(2,3,4);

console.log("O valor de mult é " + mult);


function escrevaSeuNome(nome) {
    return "Flavio"; //retornara o Flavio para a função escrevaSeuNome.
}

console.log(escrevaSeuNome()); //chamei a função com o nome dela e entre parenteses na frente. (Retornara "Flavio" no console).




function podeDirigir (idade, cnh) { //declaramos duas variaveis idade e cnh para a function.
    if (idade >= 18 && cnh == true) { 
        console.log("Você pode dirigir");//se a idade for maior ou igual a 18 e tiver cnh imprimir isso.
    } else {
        console.log ("Você não pode dirigir");//caso uma das duas for falso imprimir isso.
    }
}

console.log(podeDirigir(18, true)); 
console.log(podeDirigir(17, true));
console.log(podeDirigir(44, false));
console.log(podeDirigir(15, false)); // chamamos o console log e logo após chamamos a função e dentro da função preenchemos as variaveis por ordem (idade e depois cnh).



