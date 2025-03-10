class Transporte {
    constructor(nome, capacidade, tempo, valor) {
        this.nome = nome;
        this.capacidade = capacidade;
        this.tempo = tempo;
        this.valor = valor;
    }

    exibirContexto() {
        console.log("Boa noite, para chegar até Etec da Zona Leste, você tem as seguintes opções:");
    }

    exibirInformacoes(){
     console.log(this.nome + ": Tem a capacidade máxima de " + this.capacidade + " passageiros, com o tempo de chegada de " + this.tempo + " minutos, pelo valor de R$ " + this.valor + ".");
    }

}
