const escalas = {
    1: 12,//tera
    2: 9,//giga
    3: 6,//mega
    4: 3,//quilo
    5: 0,//base
    6: -3,//mili
    7: -6,//micro
    8: -9,//nano
    9: -12,//pico
};

let origem = parseInt(prompt(`Digite a unidade de ORIGEM:
1 - tera
2 - giga
3 - mega
4 - quilo
5 - base 
6 - mili
7 - micro
8 - nano
9 - pico`
));

if(!escalas[origem] && escalas[origem] !== 0){
    alert("Operação indisponível: Unidade Inválida.");
}

let valorInicial = parseInt(prompt("Digite o valor inicial: "));

let conversao = parseInt(prompt(`Digite para qual unidade deseja converter:
1 - tera
2 - giga
3 - mega
4 - quilo
5 - base 
6 - mili
7 - micro
8 - nano
9 - pico`
));

if(!escalas[origem] && escalas[origem] !== 0){
    alert("Operação indisponível: Unidade Inválida.");
}
let expoenteOrigem = escalas[origem];
let expoenteDestino = escalas[conversao];

let resultado = valorInicial * Math.pow(10, expoenteOrigem - expoenteDestino);

console.log(`Convertendo de 10^${expoenteOrigem} para 10^${expoenteDestino}`);
console.log("O valor final é: " + resultado);