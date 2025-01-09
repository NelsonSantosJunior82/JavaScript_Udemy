let num1 = 1;
let num2 = 26;
let num3 = 49;
let num4 = 18;
let num5 = 14;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++)// para cada "i" for igual a "0", enquanto "i" for menor que o tamanho do parâmetro "args", "i = i + 1"
    {
        console.log(args[i]);// imprime argumentos
    }
}

imprimirNumeros(num1,num2,num3,num4);
console.log("...");
imprimirNumeros(num2,num3,num4);
console.log("...");
imprimirNumeros(2,5,9,4,8,7,6,1,3);