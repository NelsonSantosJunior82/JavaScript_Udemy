//Instancia de função
function criarCachoroo(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au, au");
    }
    return cachorro;
}

let doberman = criarCachoroo('Doberman', 4 , 'preto');

console.log(doberman);

doberman.latir();