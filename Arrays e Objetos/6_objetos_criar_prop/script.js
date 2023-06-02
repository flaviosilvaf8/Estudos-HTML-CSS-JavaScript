let pessoa = {
    nome: "Flavio",
    idade: 22,
    profissao: "Programador",
}

console.log(pessoa.nome); //imprimira o nome Flavio no console.

delete pessoa.nome; //Nome Flavio foi deletado do objeto

console.log(pessoa.nome);// Irá imprimir undefined no console, pois o nome foi deletado acima

pessoa.nome = "João"; //nome recebera João

console.log(pessoa.nome); //Imprimira o nome João no console.