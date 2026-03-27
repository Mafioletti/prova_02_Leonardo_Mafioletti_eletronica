let tamanho = parseInt(prompt("Digite quantos resistores tem no cálculo: "));
let resistores = [];

for(let contador = 0; contador < tamanho; contador++){
    let valor = parseInt(prompt(`Digite o valor do ${contador + 1} resistor:` ));

    if(isNaN(valor) || valor <= 0){
        alert("Valor inválido! Tente novamente.");
        contador--;
    } else {
        resistores.push(valor);
    }
}
    let serie = resistores.reduce((soma, val) => soma + val, 0);
    let paralelo = 1 / resistores.reduce((soma, val) => soma + (1 / val), 0);

    console.log("Resistores em série: " + serie);
    console.log("Resistores em paralelo: " + paralelo.toFixed(2));
