let nome = "Flavio"; // guardara o nome Flavio na variavel

if(nome != undefined && nome == "Matheus") { 
    console.log("Nome esta definido"); // se o nome estiver definido e o nome for Matheus imprimira a mensagem   
}else if(nome == "Flavio" && nome.length > 5) { 
    console.log("O nome é Flavio");// se o nome for Flavio e o nome tiver mais que 5 caracteres imprimira a mensagem do console.
}else{
    console.log('Não é o Flavio');// se não imprimira esta mensagem.
}