class Metro extends Transporte {
    constructor(nome, capacidade, tempo, valor, linha) {
    super(nome, capacidade, tempo, valor);
    this.linha = linha;
    }

    exibirSentido() {
        console.log("Linha: " + this.linha);
    }
}