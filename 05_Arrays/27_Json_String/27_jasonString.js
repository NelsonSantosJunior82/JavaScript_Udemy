let pessoa = {
    "Nome": "Nelson",
    "Idade": 42,
    "Conjuge": "Janaina",
    "Filhos":["Pietro","Maria Alice","Ravi"]
}

let pessoaTexto = JSON.stringify(pessoa);// altera JSON em string

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);// altera string em JSON

console.log(pessoaJSON);