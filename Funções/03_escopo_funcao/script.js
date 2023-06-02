let y = 10; //y do escopo global recebe 10

function imprimir () {
    let y = 150; // y da função recebe 150
    console.log(y); // imprimira 150 na função, depois que função for chamada.
}

imprimir(); // chamando a função.

console.log(y); // imprimira no console 10 do escopo global.

