function cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    //Foi criada uma função que cria um objeto
}

cachorro.prototype.uivar = function () { //foi criada a função uivar para o prototype
    console.log("Auuuuuu");
}

let husky = new cachorro ('Husky', 4, 'Cinza')

husky.uivar();


function Carro (rodas, motor, cambio) {
    this.rodas = rodas;
    this.motor = motor;
    this.cambio = cambio;
}

let porshe = new Carro(4, 3.2, 'Automatico')

Carro.prototype.ar = function () {
    console.log('Sim')
}


porshe.ar();

