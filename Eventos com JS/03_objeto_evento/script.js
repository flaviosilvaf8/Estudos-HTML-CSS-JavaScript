let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg (e) {
    console.log(e);
}


btn1.addEventListener("click", msg);// chamando a função de click acima, mostrara todas as informações do nosso evento

btn2.addEventListener("click", function(event){
    console.log(event);// chamando as informações do nosso evento de uma outra forma
});