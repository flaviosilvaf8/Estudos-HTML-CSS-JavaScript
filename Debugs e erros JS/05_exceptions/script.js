//função que recebe um nome e transmite uma saudação, se não for string imprimira o erro no console (throw new error)

function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error ("o parâmetro nome precisa ser string");
    } else {
        console.log("Ola " + nome);
    }
}

saudacao("Flavio");
saudacao(5);