let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf-8", (error, texto) => {
    if(error){
        throw error;
    }else{
        console.log(texto);
    }
});

writeFile("arquivo.txt", "texto por writefile", (error) =>{
    if(error){
        throw error;
    }else{
        console.log("Escreveu com sucesso!")
    }
})