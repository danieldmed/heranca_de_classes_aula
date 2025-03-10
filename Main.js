const onibus1 = new Onibus("Ônibus", 120, 30, 5.00, "Terminal A E Carvalho");
const metro1 = new Metro("Metrô", 300, 20, 5.20, "3 - Vermelha");
const uber1 = new Uber("Uber", 4, 12, 16.90, "DA3AB84", "Fiat Uno", "José");
const transporte1 = new Transporte();

transporte1.exibirContexto();

onibus1.exibirInformacoes();
onibus1.exibirNome();

metro1.exibirInformacoes();
metro1.exibirSentido();

uber1.exibirInformacoes();
uber1.exibirInfoUber();