const alicia = [26, 71, 44, 45, 32, 24];
const bob = [25, 70, 43, 46, 44, 26];

function encontrarGanhador(a, b) {
    let pontosAlicia = 0
    let pontosBob = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {      
            pontosAlicia++;
        } else if (a[i] < b[i]) {
            pontosBob++;
        }
    }
        
        if (pontosAlicia > pontosBob) {
            console.log("A vencedora é Alicia")
        } else if (pontosBob > pontosAlicia){
            console.log("O vencedor é Bob")
        } else {
            console.log("Ninguém venceu")
        }

}

console.log(encontrarGanhador(alicia, bob))




function digitalHouse(x, y){
    for (let i = 0; i <= 100; i++) {
        if ( ((i % x) == 0) && ((i % y) == 0)){
            console.log(i + " é Digital House")
        }
        
            else if ((i % y) == 0) {
            console.log(i + " é House")
        } 
 
               else if ((i % x) == 0) {
                console.log( i + " é Digital")
        }
        
    }
}

console.log(digitalHouse(4, 5))

function multiploDe(x, y){
    for (let i = 0; i <= 100; i++) {
        if ( ((i % x) == 0) && ((i % y) == 0)){
            console.log(i + " é múltiplo de " + x + " e " + y)
        }
        
            else if ((i % y) == 0) {
            console.log(i + " é múltiplo de " + y)
        } 
 
               else if ((i % x) == 0) {
                console.log( i + " é múltiplo de " + x)
        }
        
    }
}

console.log(multiploDe(4, 5))

let arr = [1, 4, 5, 6, 3, 4, 5, 4, 2, 8, 9]

let soma = arr.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual)

console.log(soma);



let arr2 = ["e", "a", "e", " ", "brother?"]

let join = arr2.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual)

console.log(join)