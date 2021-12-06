const dadosJson = require('./pessoas (1).json');
let listaUsuarios = []

function Pessoas(sexo, nome, altura){
    this.sexo = sexo,
    this.nome = nome,
    this.altura = altura;
}

function adicionarPessoa(dadosJson, listaUsuarios){
    for (let i = 0; i < dadosJson.length; i++) {
    listaUsuarios.push(new Pessoas(dadosJson[i].sexo, dadosJson[i].nome, dadosJson[i].altura))   
    } 
    return listaUsuarios
};

adicionarPessoa(dadosJson, listaUsuarios);

console.log(listaUsuarios)

let listaAltura = []

function altura(listaUsuarios, listaAltura){
   
    for (let i = 0; i < listaUsuarios.length; i++) {
        listaAltura.push(listaUsuarios[i].altura);
    } return listaAltura
}

altura(listaUsuarios, listaAltura)

console.log(listaAltura)


let max = listaAltura.reduce(function(a, b) {
    return Math.max(a, b)
});

console.log(max)

let min = listaAltura.reduce(function(a, b) {
    return Math.min(a, b)
});

console.log(min)


function alturaMulheres(listaUsuarios){
    
    let listaAlturaMulheres = []
    
    for (let i = 0; i < listaUsuarios.length; i++) 
        if (listaUsuarios[i].sexo === 'F'){
        listaAlturaMulheres.push(listaUsuarios[i].altura);
        }
    }   
    return listaAlturaMulheres



let x = alturaMulheres(dadosJson)
console.log(x)

// // let somaAlturaMulheres = listaAlturaMulheres.reduce((a, b) => a + b, 0);
// // let mediaAlturaMulheres = (somaAlturaMulheres / listaAlturaMulheres.length) || 0;


// let nHomens = 0
// function numeroHomens(listaUsuarios, nHomens){
   
//     for (let i = 0; i < listaUsuarios.length; i++) {
//         if (listaUsuarios.sexo === 'M'){
//             nHomens =+1;
//         }return nHomens
//     }
// }

// console.log(numeroHomens(listaUsuarios, nHomens))