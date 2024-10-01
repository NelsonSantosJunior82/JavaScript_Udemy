let nome = "Nelson";
let idade = 28
if(nome != undefined && nome == 'Joaquim'){
    console.log('Nome já está definido!');
} else if (nome == "Nelson" && nome.length > 5 && idade == 50) {
    console.log(`Meu nome é ${nome}.`);
} else {
    console.log(`Não é ${nome}`);
}

if(1 > 2){
    console.log('Testando');
} else if(1 == 1) {
    console.log('Testando 2');
}