const fruta = /abacax?i/;// letra 'x' ficara como opicional, pois tem o operador question na sua frente

console.log(fruta.test('abacaxi'));// retornara true pois com 'x' ou sem, aceitara
console.log(fruta.test('abacai'));// retornara true pois com 'x' ou sem, aceitara