class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;        
        this.cor = cor
    }
}

Cachorro.prototype.raca = 'SRD'
Cachorro.prototype.patas = 4; //adicionado um objeto no prototype

let bulldog = new Cachorro ('bulldog', 'bege')


console.log(Cachorro.prototype.raca)// mostrara SRD no console.
console.log(bulldog.raca)// mostrara bulldog no console.


