window.addEventListener("keydown", function(e){
    if(e.key == 'p'){
        console.log("Apertou a letra p")
    }else if(e.key == 'Enter'){
        console.log("Apertou a tecla enter")
    }
});// quando precionarmos as teclas p e enter aparecera  a mensagem no console

window.addEventListener("keyup", function(e){
    if(e.key = 'Enter'){
        console.log("Soltou o Enter")// quando soltarmos a tecla enter aparecera a mensagem do console
    }
})