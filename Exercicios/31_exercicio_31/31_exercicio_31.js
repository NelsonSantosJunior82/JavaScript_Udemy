let nomes = ["Janaina","Pietro","Maria","Nelson","Ravi","Yasmin"]
let nomes2 = ["Janaina","Pietro","Maria"]

function verificaNomes(arr){//arr como argumento que são as duas arrays
    if(arr.length >= 5){//aqui verifica o tamanho das duas arrays
        console.log("Muitos Elementos!");
    }else{
        console.log("Poucos Elementos!");
    }
}

verificaNomes(nomes)
verificaNomes(nomes2)
