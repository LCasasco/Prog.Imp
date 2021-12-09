let Aluno = require('./aluno.js')

let listaEstudantes = [];

listaEstudantes.push (new Aluno("Lucas", 2, [9, 10, 2]));
listaEstudantes.push (new Aluno("Pedro", 3, [9, 8, 10]));
listaEstudantes.push (new Aluno("Katy", 1, [7, 8, 9]));
listaEstudantes.push (new Aluno("Jhonny", 2, [6, 7, 9]));
listaEstudantes.push (new Aluno("Zica Boy", 10, [6, 3, 2]));

module.exports = listaEstudantes;