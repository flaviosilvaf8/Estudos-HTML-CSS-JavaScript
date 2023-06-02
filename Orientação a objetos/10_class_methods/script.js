class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;        
        this.cor = cor
    }
}

Cachorro.prototype.patas = 4; //adicionado um objeto no prototype

let bulldog = new Cachorro ('bulldog', 'bege')

console.log(bulldog.patas) //chamando a função

class Moto {
    constructor (freio, ano) {        
        this.freio = freio;
        this.ano = ano;
    }

    barulho () {
        console.log("bolololololo")
    }
}



let honda = new Moto('ABS', 2023)

Moto.prototype.rodas = 2;

honda.barulho();





