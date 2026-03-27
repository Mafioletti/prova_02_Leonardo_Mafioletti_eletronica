let eletroDomestico = prompt("Digite qual o eletrodoméstico: ");
let opcao = Number(prompt(`Digite qual potência está sendo considerada:
1 - Watt
2 - KiloWatt`
));
let Kwh;
let potencia = Number(prompt("Digite a potência do aparelho: "));
let tempo = Number(prompt("Digite o tempo que o aparelho é usado no dia: "));
let taxa = Number(prompt("Digite o valor do Kwh (Exemplo: 0.5): "));

switch(opcao){
    case 1:
        Kwh = (potencia * tempo) / 1000;
        break;
    case 2:
        Kwh = potencia * tempo;
        break;
    default:
        alert("Opção Indisponível")
}
console.log("Eletrodoméstico: " + eletroDomestico);
console.log("Consumo por dia: " + (Kwh.toFixed(2)) + " kilowatts");
console.log("Valor mensal a ser pago: " + ((Kwh * 30) * taxa).toFixed(2));