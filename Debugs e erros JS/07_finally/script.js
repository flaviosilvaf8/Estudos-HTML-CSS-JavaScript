try {
    let a = 2
} catch (error) {
    console.log('Algo deu errado ' + error);// imprimira o erro no console, se houver.
} finally {
    console.log('Executou') //executara independente de erro ou não
}


