const p1 = new Promise (function(resolve, reject) {
    setTimeout(function(){
        resolve(10);
    }, 3000);    
});


const p2 = Promise.resolve(10);

const p3 = Promise.resolve(13);

Promise.all([p1,p2,p3]).then((values) => console.log(values));// o metodo all imprime diversas promises, no modelo de um array "[]".

//após 3 segundos sera impresso o valor 10 da primeira função e logo após os numeros 10 e 13.