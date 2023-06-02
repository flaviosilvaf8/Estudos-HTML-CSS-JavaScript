function cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    //Foi criada uma função que cria um objeto
}

let husky = new cachorro('Husky', 4, 'Cinza'); //criado um novo objeto a partir da função cachorro

console.log(husky.patas) //Imprimira 4 no console.



function Carro (rodas, motor, cambio) {
    this.rodas = rodas;
    this.motor = motor;
    this.cambio = cambio
}

let bmw = new Carro (4, 2.8, 'automático')

console.log(bmw.motor)
