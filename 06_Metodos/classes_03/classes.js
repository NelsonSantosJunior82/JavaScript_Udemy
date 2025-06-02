//Construtor por New

function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Aauuuuuu!!!!");
    }
}

let husky = new Cachorro("Husky", 4, "Albino");

husky.uivar();



