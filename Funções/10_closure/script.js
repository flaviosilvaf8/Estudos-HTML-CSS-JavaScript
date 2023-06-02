function lembrarSoma(x) {
    return function(y){
        return x + y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5)); // somara 2 + 5 = 7

let soma2 = lembrarSoma(5);

console.log(soma2(7)); //somara 5 + 7 = 12