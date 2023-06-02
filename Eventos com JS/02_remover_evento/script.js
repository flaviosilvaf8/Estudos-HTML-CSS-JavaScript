let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg () {
    console.log("Clicou em mim");// função do botão clicou em mim
}


btn1.addEventListener("click", msg);// adicionando evento e chamando a função

btn2.addEventListener("click", function(){
    btn1.removeEventListener("click", msg);
});// ira remover o evento