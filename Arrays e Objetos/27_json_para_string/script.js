let pessoa = {
    "nome": "Flavio",
    "idade": 22,
    "profissão": "programador",
    "hobbies": ["Video game", "Basquete", "CCB"]
}

let pessoaTexto = JSON.stringify(pessoa); //Convertera o JSON em string guardando dentro de pessoaTexto

console.log(pessoaTexto);// Imprimira no console as strings

let pessoaJson = JSON.parse(pessoaTexto);//Convertera a String em Json novamente


console.log(pessoaJson);//Imprimira o JSON no console.
