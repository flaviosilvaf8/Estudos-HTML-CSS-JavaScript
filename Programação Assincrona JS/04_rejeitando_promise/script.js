function verificaNum (num){
    return new Promise ((resolve, reject) => {
        if(num == 2){
            resolve(console.log('Numero correto'));
        }else{
            reject(new Error("Falhou"));
        }
    });
}

verificaNum(2);// imprimira o resolve
verificaNum(3);// imprimira o reject
