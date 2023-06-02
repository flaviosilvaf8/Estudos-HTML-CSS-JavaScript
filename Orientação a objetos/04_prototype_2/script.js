const pessoa = {
    maos: 2,
}

const pessoaNova = Object.create(pessoa);// foi criado um novo objeto a partir do objeto anterior

console.log(pessoaNova.maos)// mostrara 2 no console, pois herdara as informações do prototype acima


 

