let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}



let adicional = {
    tetoSolar: true,
    flex: true,
}

console.log(carro);

Object.assign(carro, adicional); //copia a propriedade de um objeto para o principal, objeto carro passara a ter tetosolar e flex.

console.log(carro)
;

