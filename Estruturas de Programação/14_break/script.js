let nome = "Flavio";

for (let i = 1; i < 10; i = i + 1){

  console.log(i); // toda vez que fizer o loop vai imprimir o i.

  if (i == 5){
    nome = "João";  // se o i for igual a 5 a variavel nome recebe "João"
  }

  if (i == 8 && nome == "João") { 
  console.log ("o nome agora é João"); 
  break; // se i for igual a 8 e o nome for igual a João, imprimir no console que agora o nome é João e pausar o loop com o break
  }  

}






