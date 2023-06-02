let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg (e) {
    console.log("Clicou em mim");
    e.stopPropagation();// quando clicar no btn1 não aparecera que clicou em paragrafo tambem
}


btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event){
    console.log(event);
});

p.addEventListener("click", function() {
    console.log("Clicou no paragrafo");
});// quando clicar em paragrafo imprimira esta mensagem