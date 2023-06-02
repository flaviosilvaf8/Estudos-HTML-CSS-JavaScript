// O Strict não deixa realizarmos algumas ações que poderiam ser possíveis com o JS puro. EX:

"use strict" //chamando o strict

opa = 'teste'; //apresentara um erro no console, pois let ou const não foram definidos

function teste (){
    "use strict" //chamando o strict dentro de uma função, let ou const abaixo não definido, dará erro no console.
    testando = 'teste';
}

teste(); 