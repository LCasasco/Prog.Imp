let produtosCompra = ["banana", "maçã", "jaca", "jabuticaba", "sabão"]
console.log(produtosCompra)

let exJoin = ["Esse", "método", "junta (join)", "os", "elementos", "de", "um", "array", "usando um separador definido por nós,", "nesse caso, o espaço em branco"]
console.log(exJoin.join(" "))

let exPop = ["Bom elemento", "Mal elemento", "Elemento neutro", "Esse método elimina o último elemento de um array e retorna ele mesmo"]
console.log(exPop)
console.log(exPop.pop())

let exPush = ["Esse método", "adiciona elementos"]
console.log(exPush)
console.log(exPush.push("ao array", "e retorna o número de elementos atualizado"))
console.log(exPush)

let exShift = ["Mal elemento", "Esse método", "elimina o primeiro", "elemento do array", "e retorna ele mesmo"]
console.log(exShift)
console.log(exShift.shift())

let exUnshift = ["adiciona elementos ao", "começo do array", "e retorna o novo tamanho"]
console.log(exUnshift)
console.log(exUnshift.unshift("Esse método"))
console.log(exUnshift)