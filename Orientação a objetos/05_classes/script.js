let cachorro = {
    raca: 'SRD',
    patas: 4,
    latir: function () {
        console.log("auau")
    }, //criado objeto cachorro
}

labrador = Object.create(cachorro) // criado novo objeto chamado labrador, herdando as propriedades de cachorro.

labrador.raca = "Labrador" // definindo a raca do labrador.

console.log(labrador.raca) //imprimira labrador no console.

console.log(cachorro.raca)// imprimira SRD no console.

 

