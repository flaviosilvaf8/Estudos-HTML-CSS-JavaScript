function nomeIdade (nome, idade) {
    if (nome === undefined || idade === undefined) {
        console.log("Precisamos que preencha o nome e a idade");
    } else {
        console.log(`O seu nome é ${nome} e a sua idade é ${idade}`);
    }
}   

console.log(nomeIdade("Flavio")); //Imprimira a mensagem do if
console.log(nomeIdade("Flavio", 22));//Imprimira a mensagem do else



