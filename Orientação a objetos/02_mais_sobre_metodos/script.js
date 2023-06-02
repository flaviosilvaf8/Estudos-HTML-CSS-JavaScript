let cachorro = {
    raca: "Sem raça definida",
    
    uivar: function () {
        console.log("Auuuuuuuu")
    },

    rosnar: function () {
        console.log("grrrr")
    },

    setRaca: function (raca) {
        this.raca = raca; //setara uma raça para o cachorro de acordo com o que for impresso na função
    }
}

console.log(cachorro.raca); //Aparecera no console sem raça definida

cachorro.setRaca("Pastor Alemão");// Guardando Pastor Alemão dentro de Raça

console.log(cachorro.raca)// Impimira Pastor Alemão no console.


 

