const listaEstudantes = require('./estudantes.js');
let estudantes = require('./estudantes.js')

let curso = {
    nomeCurso: "Programação Hiperativa",
    notaAprov: 7,
    faltasMax: 10,
    listaEstudantes: [],

    addEstudante: function (aluno) {
        this.listaEstudantes.push(aluno)
        return true;
    },

    aprovado: function (aluno) {
        let qtdFaltas = aluno.qtdFaltas;
        let mediaAluno = aluno.calcularMedia();

        if ((mediaAluno >= this.notaAprov) && (qtdFaltas < this.faltasMax)) {
            return true;
        } else if (qtdFaltas == this.faltasMax) {
            if (mediaAluno >= (this.notaAprov / 10) + this.notaAprov) {
                return true;
            } else {
                return false;
            }

        } else {
            return false;
        }
    },

    checagemAluno: function () {
        let checagem = []
        for (let i = 0; i < this.listaEstudantes.length; i++) {
            checagem.push(this.aprovado(this.listaEstudantes[i]));
        }
        return checagem;
    }
}

for (let i = 0; i < estudantes.length; i++) {
    curso.addEstudante(estudantes[i]);
}

console.log(curso)
console.log(curso.checagemAluno())