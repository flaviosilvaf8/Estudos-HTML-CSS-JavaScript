//função que checa se o usuario digitou um numero.

function checaNumero (num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        console.log("Por favor passe apenas numeros")
    } else {
        return number;
    }
}


checaNumero(5);
checaNumero('hdh');
