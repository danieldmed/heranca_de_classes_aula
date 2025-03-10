class Onibus extends Transporte {
    constructor(nome, capacidade, tempo, valor, sentido) {
        super(nome, capacidade, tempo, valor);
        this.sentido = sentido;
    }

    exibirNome() {
        console.log("Sentido: " + this.sentido);
    }
}