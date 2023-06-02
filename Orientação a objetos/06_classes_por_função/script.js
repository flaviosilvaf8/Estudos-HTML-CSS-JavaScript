function criaCachorro (raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro; //Foi criada uma função que cria um objeto
}


let doberman = criaCachorro('Doberman', 4, 'Preto')// chamando a função e setando as caracteriscas do objeto 

console.log(doberman);// imprimira as informações, que foram recebidas no console
