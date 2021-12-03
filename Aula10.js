// Exercícios

// let produtosCompra = ["banana", "maçã", "jaca", "jabuticaba", "sabão"]
// console.log(produtosCompra)

// let exJoin = ["Esse", "método", "junta (join)", "os", "elementos", "de", "um", "array", "usando um separador definido por nós,", "nesse caso, o espaço em branco"]
// console.log(exJoin.join(" "))

// let exPop = ["Bom elemento", "Mal elemento", "Elemento neutro", "Esse método elimina o último elemento de um array e retorna ele mesmo"]
// console.log(exPop)
// console.log(exPop.pop())

// let exPush = ["Esse método", "adiciona elementos"]
// console.log(exPush)
// console.log(exPush.push("ao array", "e retorna o número de elementos atualizado"))
// console.log(exPush)

// let exShift = ["Mal elemento", "Esse método", "elimina o primeiro", "elemento do array", "e retorna ele mesmo"]
// console.log(exShift)
// console.log(exShift.shift())

// let exUnshift = ["adiciona elementos ao", "começo do array", "e retorna o novo tamanho"]
// console.log(exUnshift)
// console.log(exUnshift.unshift("Esse método"))
// console.log(exUnshift)


// Mesa de trabalho
let arr = [1,2,3,4,5,6]

function imprimirInverso(x){
    console.log(x.reverse())
}

imprimirInverso(arr)

function inverter(x){
    let xReverso = (x.reverse())
    return xReverso;
}

console.log(inverter(arr))

let soma = arr.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual)

console.log(soma);

function join(x) {
    return x[0] + x[1] + x[2]
}

arr2 = ["olá ", "tudo ", "bem? "]

console.log(join(arr2))

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

console.log(filmes[0])

function maisculas(filme) {
    filme[0] = filme[0].toUpperCase()
    filme[1] = filme[1].toUpperCase()
    filme[2] = filme[2].toUpperCase()
    filme[3] = filme[3].toUpperCase()
    filme[4] = filme[4].toUpperCase()
    return filme
}

console.log(maisculas(filmes))

let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function unirArr(filmes, filmes2){
    let arr3 = [filmes, filmes2];
    return arr3.join(' ');
}

console.log(unirArr(filmes, filmes2))

function unirArr2(filmes, filmes2){
    filmeRemovido = filmes2.pop()
    filmeRemovido
    arr3 = [filmes, filmes2]
    return arr3.join(' ') + ('. ' + filmeRemovido + ' foi removido')
    
}

console.log(unirArr2(filmes, filmes2))

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar(notas1, notas2) {
    if (notas1.toString() == notas2.toString()) {
      return "iguais";
    } else {
      return "nao iguais";
    }
  }

console.log(comparar(asiaScores, euroScores))
