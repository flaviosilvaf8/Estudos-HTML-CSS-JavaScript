let senhaCorreta = prompt('Qual a senha correta?');

if (senhaCorreta == '1234'){
    alert ("a senha é correta.")
}else{
    alert("a senha está incorreta.")
}







let idade = 19; //guardara a idade 19
if(idade == 19) { 
    console.log('a idade é igual a 19') //se a idade for igual a 19 irá aparecer no console a mensagem setada
}

let nome = 'Flavio'; //guardara o nome Flavio
if(nome == 'Flavio' && idade > 10){ 
    console.log('Você esta liberado!'); //se o nome for Flavio e a idade maior que 10 sera imprimido no console a mensagem setada.
}

let maiorMenor = prompt('Qual a sua idade'); //imprimira no prompt a mensagem setada
if(maiorMenor >= 18) {
    console.log('Você é maior de idade'); // se a idade for maior ou igual a 18 setara a mensagem setada no console.           
}else{
    console.log('Você é de menor.');
}
