let pessoa = {
    nome: "Flavio",
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2); //aparecerá true no console.

pessoa2.nome = "João" //alterara o nome de pessoa2 e pessoa.

console.log(pessoa.nome);// aparecera João pois foi alterado acima o nome de pessoa2 que automaticamente mudou o de pessoa

