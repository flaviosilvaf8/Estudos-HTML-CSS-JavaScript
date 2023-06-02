class Cachorro{
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    get getCor() {
        return this.cor; //imiprimira a cor do cachorro
    }

    set setCor(cor) {
        this.cor = cor; //recebera a cor do cachorro
    }
}

let pastor = new Cachorro('Pastor Alemão', 'Sem cor definida');

console.log(pastor);

pastor.setCor = 'Marrom';//setando a cor do cachorro

console.log(pastor.getCor)//imprimindo a cor do cachorro no console