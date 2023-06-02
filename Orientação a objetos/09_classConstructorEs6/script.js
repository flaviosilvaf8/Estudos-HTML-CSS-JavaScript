class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor
    }
}

let bulldog = new Cachorro ('bulldog', 4, 'bege')

console.log(bulldog.raca);


class Moto {
    constructor (rodas, freio, ano) {
        this.rodas = rodas;
        this.freio = freio;
        this.ano = ano;
    }
}

let honda = new Moto(2, 'ABS', 2023)

console.log(honda.rodas)

