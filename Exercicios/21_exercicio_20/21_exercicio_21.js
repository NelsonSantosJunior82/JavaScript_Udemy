function verificaDado(dado){
    if(typeof dado === 'string'){
        console.log("Este dado é uma String!")
    }else if(typeof dado === 'number'){
        console.log("Este dado é um Number!")
    }else if(typeof dado === "boolean"){
        console.log("Este dado é um Booleano!")
    }
}

verificaDado("Olá, Mundo!");
verificaDado(123);
verificaDado(true);