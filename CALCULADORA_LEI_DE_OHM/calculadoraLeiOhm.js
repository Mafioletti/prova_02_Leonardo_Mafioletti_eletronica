let opcao = parseInt(prompt(`Digite o que quer calcular
1 - Tensão
2 - Corrente
3 - Resistência
`));

switch(opcao){
    case 1:
        calcularTensao();
        break;
    case 2:
        calcularCorrente();
        break;
    case 3:
        calcularResistencia();
        break;
    default:
        alert("Operação indisponível")


}
function calcularTensao(){
    let corrente = parseInt(prompt("Digite a corrente: "))
    let resistencia = parseInt(prompt("Digite a resistência: "))
    let tensao = corrente * resistencia;
    console.log(tensao);
}
function calcularCorrente(){
    let tensao = parseInt(prompt("Digite a tensão: "))
    let resistencia = parseInt(prompt("Digite a resistência: "))
    let corrente = tensao / resistencia;
    console.log(corrente);
}
function calcularResistencia(){
    let tensao = parseInt(prompt("Digite a tensão: "))
    let corrente = parseInt(prompt("Digite a corrente: "))
    let resistencia = tensao / corrente;
    console.log(resistencia);
}