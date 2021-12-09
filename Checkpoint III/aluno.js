function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome,
    this.qtdFaltas = qtdFaltas,
    this.notas = notas;

    this.calcularMedia = function () {
        let somaNotas = this.notas.reduce((a, b) => a + b, 0);
        let mediaNotas = (somaNotas / this.notas.length) || 0;
        return mediaNotas;
    }

    this.faltas = function () {
        return this.qtdFaltas++;
    }
}

module.exports = Aluno;

