console.log('1');//sera executado no mesmo instante no console

setTimeout (function (){
    console.log('5');    
},2000) //função assincrona que imprimira o 5 após 2000 ms (2 segundos)

console.log('2');//sera executado no mesmo instante no console
console.log('3');//sera executado no mesmo instante no console
console.log('4');//sera executado no mesmo instante no console
