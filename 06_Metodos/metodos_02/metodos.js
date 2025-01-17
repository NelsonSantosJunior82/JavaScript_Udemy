const cachorro = {
    raca: 'SRD',
    uivar: function(){
        console.log("AAAuuuuuu");
    },//método

    rosnar: function(){
        console.log("GGGrrrrrr");
    },//método

    setRaca: function(raca){
        this.raca = raca;
    },//novo método

    getRaca: function(){
        return "A raça é "+ this.raca;
    }//método para imprimir informações do próprio objeto
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);
console.log(cachorro.getRaca());