num = 1
num1 = 3
num2 = 7
num3 = 8

function imprimaUmNumero (...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimaUmNumero(num,num1, num2); //irá imprimir os numeros das variaveis
console.log("Pausa");
imprimaUmNumero(num2, num3); //irá imprimir os numeros das variaveis

