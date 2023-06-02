let a = document.querySelector("a")

a.addEventListener("click", function(e){
    e.preventDefault();// clicando no meu a não serei mais direcionado para a pagina do blog

    console.log("não vai mais mudar de link");// quando eu clicar no a não vai me levar pro link e ainda aparecera essa mensagem no console
})

