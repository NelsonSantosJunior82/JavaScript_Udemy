let pessoa ={
    nome: "Nelson",
    idade: 42,
    profisao: "Programador"
};

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

pessoa.casado = true;

console.log(pessoa)