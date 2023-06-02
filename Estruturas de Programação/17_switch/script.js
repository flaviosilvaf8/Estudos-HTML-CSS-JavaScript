 let nome = prompt("Qual o seu nome?"); // Aparecerá um prompt em tela perguntando o nome

switch(nome) {
  case "Matheus":
    console.log("O nome é Matheus");
    break; // caso o nome seja Matheus imprimira no console, e quebrara o loop

  case "Flavio":
    console.log("O nome é Flavio");
    break; // caso o nome seja Flavio imprimira no console, e quebrara o loop
  
  default:
    console.log ("nome não encontrado.");  // caso o nome não seja nem Matheus e nem Flavio, imprimira essa mensagem por default, que serve como um "ELSE".
}
