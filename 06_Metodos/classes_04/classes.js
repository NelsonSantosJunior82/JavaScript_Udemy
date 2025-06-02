//Construtor por Método

function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuuu!!!");
}

Cachorro.prototype.latir =function(){
    console.log("Au,au,au,au");
}

let husky = new Cachorro("Husky", 4, "Albino");

husky.uivar();
husky.latir();



