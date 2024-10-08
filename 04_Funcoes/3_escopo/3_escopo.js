let y = 10; // Variável de escopo global

function imprimir(){
    let y = 150; // Variável de escopo local

    console.log(y);
}

imprimir();

console.log(y);