function soma(x,y){
    return x + y;
}

console.log ( soma(12, 20) );

function PolegadaCm(x){
    return x * 2.54 +" cm"
}

console.log (PolegadaCm(2));

function URL(x){
    return "www." + x + ".com"

}

console.log(URL('putin'));

function exclama(x){
    return x + '!'

}

console.log(exclama('que delícia, cara'))

function Idadog(x){
    return x * 7
}

console.log (Idadog(2))

function ValorHora(x){
    console.log('O valor da tua hora é:') 
    return x / 160
}
console.log(ValorHora(1800))

function IMC(x,y){
    console.log('Teu IMC é')
    return x / (y * y)
}

console.log(IMC(65, 1.75))

function Maiusculas(x){
    return x.toUpperCase()
}

console.log (Maiusculas('alguma coisa'))

function Tipo(x){
    return (typeof x)
}

console.log (Tipo('blablabla'))

function CalculoRaio(x) {
    return 2 * Math.PI * x + ' cm'
}

console.log (CalculoRaio(23))