class Uber extends Transporte {
    constructor(nome, capacidade, tempo, valor, placa, carro, motorista) {
        super(nome, capacidade, tempo, valor);
        this.placa = placa;
        this.carro = carro;
        this.motorista = motorista;
    }
    exibirInfoUber() {
        console.log("Placa: " + this.placa + " Carro: " + this.carro + " Motorista: " + this.motorista);
    }
}