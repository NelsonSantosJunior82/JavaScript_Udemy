let carro ={
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
};

let adicionais ={
    tetosolar: true,
    arcondicionado: true
};

console.log(carro);

Object.assign(carro, adicionais);//Aqui acrescento a propriedade de "adicionais" a propriedade de carro

console.log(carro);