let filmes = ["star wars", "totoro", "rocky",  "pulp fiction", "a vida é bela"];
let filmesAnimados = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function upperCase(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase()
    }
    return arr
}

console.log(upperCase(filmes))

function passarFilmes(filmes, filmesAnimados){
    while(filmesAnimados.length>0){
        filmes.push(filmesAnimados.pop().toUpperCase())
    }
    return filmes
}

console.log(passarFilmes(filmes, filmesAnimados))

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararNotas(asiaScores, euroScores){
    let notasComparadas = []
    
    for (let i = 0; i < asiaScores.length; i++) {
        notasComparadas[i] = asiaScores[i] == euroScores[i];
        
    }

        return notasComparadas
}

console.log(compararNotas(asiaScores, euroScores))

