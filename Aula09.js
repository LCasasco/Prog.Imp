let Status = Boolean

Status = false;

if(Status){
    console.log("Valor é true");}
    
else{
    console.log("Valor é false");
}

let linguagem = " "

linguagem = "javascript"

if (linguagem == "javascript"){
    console.log("Tô aprendeno, parça!");}
    
else{
    console.log("Vish, tô entendeno é nada.");
}


let alturaPessoa = Number
let acompanhado = Boolean

function podeSubir(alturaPessoa = Number, acompanhado = Boolean){
    x = alturaPessoa
    y = acompanhado
    
    if(x >= 1.4 && x <= 2.0){
        return("Ok, pode subir")}
    
        else if ((x <= 1.4) && (x >= 1.2) && (y = true)){
            return("Ok, pode subir")}
    
            else{
                return("Não vai subir ninguém!")
    }        
}

console.log(podeSubir(2.1, false))

let alturaPessoa = Number
let acompanhado = Boolean

function podeSubir(alturaPessoa = Number, acompanhado = Boolean){
    x = alturaPessoa
    y = acompanhado
    
    if(x >= 1.4 && x <= 2.0){
        return true}
    
        else if ((x <= 1.4) && (x >= 1.2) && (y = true)){
            return true}
    
            else{
                return false;
    }        
}

podeSubir(2.1, false)
