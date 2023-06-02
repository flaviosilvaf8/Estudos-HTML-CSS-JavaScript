class mamiFero {
    constructor(patas) {
        this.patas = patas;

    }
}

let coiote = new mamiFero(4);

console.log(coiote.patas)

class Cachorro extends mamiFero {//herdara o objeto de mamifero
    constructor (patas, raca) {
        super(patas, patas); //consegue fazer alteração em patas
        this.raca = raca;
    }
}

let pug = new Cachorro (4, "pug");

console.log(pug.patas);