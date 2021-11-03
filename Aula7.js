console.log(!true)
console.log(!false)
console.log(!!false)
console.log(!!true)
console.log(!1)
console.log(!!1)
console.log(!0)
console.log(!!0)
console.log(!!"" )
let x = 5
let y = 9;
console.log(x < 10 && x!==5)
console.log(x > 9 || x===5)
console.log(!(x===y))

// -------------------------

let x = 10
let y ="a"
y==="b" || x >= 10

// x recebe 10, y recebe "a" como String. y estritamente igual a "b" OU x maior ou igual à 10.
// dado que "a" != "b", logo a primeira premissa é falsa (false)
// dado que 10 >= 10, logo a segunda premissa é verdadeira (true)
// como um dos dois resultados é verdadeiro (true) e o operador lógico é || (ou), concluímos que isso retornará verdadeiro (true)


let x=3
let y=8
(!(x == "3" || x === y) && !(y !== 8 && x <= y))

// antes do &&:
// x recebe 3, y recebe 8.
// x=="3" é verdadeiro, logo a primeira premissa é true
// x === y é falso, logo a segunda premissa é false
// logo: !(true OR false) = false

// após o &&:
// y diferente de 8 é falso, dado que let y = 8
// a negação de false é true, logo a primeira premissa é true
// x <= y é true, dado que: (y = 8 e x = 3) e (3 < 8)
// true && true = true

// considerando que a primeira parte é false e a segunda é true temos que:
// false && true = false


let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)

// str, msg e eBonito são todos strings com valores definidos, logo são true
// podemos então resolver a expressão como:
// !((true || true) && true)=
// !(true && true)
// !(true)
// false