let nomes = ["João", "Flavio", "Toubi"]

let Remove1 = nomes.shift(); //Remove o primeiro elemento do Array

console.log(nomes); //Mostrara apenas Flavio e Toubi, pois João foi removido acima

nomes.unshift("Paulo de Tarso");// Adiciona um elemento a primeira posição do Array

console.log(nomes); //Imprimira Paulo de Tarso, Flavio e Toubi no console.