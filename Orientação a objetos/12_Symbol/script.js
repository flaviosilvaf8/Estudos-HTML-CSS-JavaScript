class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;        
        this.cor = cor
    }
}

Cachorro.prototype.raca = 'SRD'
Cachorro.prototype.patas = 4; //adicionado um objeto no prototype

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let bulldog = new Cachorro ('bulldog', 'bege')


console.log(Cachorro.prototype.raca)// mostrara SRD no console.
console.log(bulldog.raca)// mostrara bulldog no console.

//acessando Symbol

console.log(Cachorro.prototype[patas])


