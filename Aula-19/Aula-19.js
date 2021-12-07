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

console.log("As alturas do grupo são: " + listaAltura)


let max = listaAltura.reduce(function(a, b) {
    return Math.max(a, b)
});

console.log("A altura máxima é de " + max + " metros.")

let min = listaAltura.reduce(function(a, b) {
    return Math.min(a, b)
});

console.log("A altura mínima é de " + min + " metros.")


function alturaMulheres(listaUsuarios){
    
    let listaAlturaMulheres = []
    
    for (let i = 0; i < listaUsuarios.length; i++){ 
        if (listaUsuarios[i].sexo === 'F'){
        listaAlturaMulheres.push(listaUsuarios[i].altura);
        }
    }   
    return listaAlturaMulheres
}
let alturaM = alturaMulheres(dadosJson)
console.log(alturaM)

let somaAlturaMulheres = alturaM.reduce((a, b) => a + b, 0);
let mediaAlturaMulheres = (somaAlturaMulheres / alturaM.length) || 0;

console.log("A média arredondada da altura das mulheres é de " + mediaAlturaMulheres + " metros.");


function numeroHomens(listaUsuarios) {
    return listaUsuarios
      .filter((item) => {
        return item.sexo === "M";
      }).length;
  }

  console.log(numeroHomens(listaUsuarios));