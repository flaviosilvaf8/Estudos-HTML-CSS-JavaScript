let a = 10;

function multiplicar (x,y) {
    let a = x * y;

    if(a > 10) {

        let a = 0;

        a++;

        console.log(a); // 1
    }
    console.log (a); //21
}

console.log(a); // 10

multiplicar(3,7);

