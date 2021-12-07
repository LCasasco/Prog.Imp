const dadosJson = require('./expectadores.json');
let listaExpectadores = []

function Expectadores(nome, idade, opiniao) {
    this.idade = idade,
        this.nome = nome,
        this.opiniao = opiniao;
}

function adicionarExpectadores(dadosJson, listaExpectadores) {
    for (let i = 0; i < dadosJson.length; i++) {
        listaExpectadores.push(new Expectadores(dadosJson[i].nome, dadosJson[i].idade, dadosJson[i].opiniao))
    }
    return listaExpectadores
};

adicionarExpectadores(dadosJson, listaExpectadores);

console.log(listaExpectadores)

function mediaIdadeOtimo(listaExpectadores) {

    let mediaIdadeOtimo = []

    for (let i = 0; i < listaExpectadores.length; i++) {
        if (listaExpectadores[i].opiniao == 3) {
            mediaIdadeOtimo.push(listaExpectadores[i].idade);

        }

    }

    let somaIdade = mediaIdadeOtimo.reduce((a, b) => a + b, 0);
    let mediaIdade = (somaIdade / mediaIdadeOtimo.length) || 0;
    return mediaIdade;
}

let mediaIdade = mediaIdadeOtimo(listaExpectadores)
console.log("A média arredondada da idade das pessoas que assistiram o filme é de " + Math.round(mediaIdade) + " anos.")


function qtdRegular(listaExpectadores) {

    let qtdRegular = 0

    for (let i = 0; i < listaExpectadores.length; i++) {
            if (listaExpectadores[i].opiniao == 1) {
                ++qtdRegular
        }
    }
    return qtdRegular
}

console.log("A quantidade de pessoas que acharam o seu filme regular é de: " + qtdRegular(listaExpectadores) + " pessoas")

function qtdBom(listaExpectadores) {

    let qtdBom = 0

    for (let i = 0; i < listaExpectadores.length; i++) {
            if (listaExpectadores[i].opiniao == 2) {
                ++qtdBom
        }
    }
    console.log(qtdBom + " de " + listaExpectadores.length + " pessoas, acharam o filme bom.")
    return ((listaExpectadores.length / qtdBom)*10 + "%")
}

console.log(qtdBom(listaExpectadores) + " do público achou seu filme bom")