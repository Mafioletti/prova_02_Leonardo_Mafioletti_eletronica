function resistor4cores(){
    //É um objeto de tradução para o CSS entender o que foi digitado
    const tradutorCores = {
        "preto": "black",
        "marrom": "#895129", //código de uma versão melhor da cor
        "vermelho": "red",
        "laranja": "orange",
        "amarelo": "yellow", 
        "verde" : "green",
        "azul": "blue", 
        "roxo": "purple",
        "cinza": "gray", 
        "branco": "white",
        "dourado": "#d4af37", //código de uma versão melhor da cor
        "prata": "#c0c0c0", //código de uma versão melhor da cor
    };

    const tabelaDeValores = {
        "preto": {valor: 0, mult: 1, tol: null},
        "marrom":{valor: 1, mult: 10, tol: "+- 1%"},
        "vermelho": {valor: 2, mult: 100, tol: "+- 2%"},
        "laranja": {valor: 3, mult: 1_000, tol: null},
        "amarelo": {valor: 4, mult: 10_000, tol: null},
        "verde": {valor: 5, mult: 100_000, tol: null},
        "azul": {valor: 6, mult: 1_000_000, tol: null},
        "roxo": {valor: 7, mult: 10_000_000, tol: null},
        "cinza": {valor: 8, mult: 1, tol: null},
        "branco": {valor: 9, mult: 1, tol: null},
        "dourado": {valor: null, mult: 0.1, tol: "+- 5%"},
        "prata": {valor: null, mult: 0.01, tol: "+- 10%"},
    };

    let cores = [];
        for(let contadorCores = 0; contadorCores < 4; contadorCores++){
            let corDigitada = prompt(`Digite a ${contadorCores + 1}ª cor: `).toLowerCase().trim();
            //.toLowerCase - coloca todo o texto em minúsculo
            //.trim() - tira espaçoes excessivos que atrapalhariam o input

            //validação de dados
            if(!tabelaDeValores[corDigitada]){
                alert(`A cor "${corDigitada}" é inválida`);
                return;
            }
            cores.push(corDigitada);
            //.push - adicionou a cor digitada ao array "cores"
        }
            document.getElementById('s1').style.backgroundColor = tradutorCores[cores[0]];
            document.getElementById('s2').style.backgroundColor = tradutorCores[cores[1]];
            document.getElementById('s3').style.backgroundColor = tradutorCores[cores[2]];
            document.getElementById('s4').style.backgroundColor = tradutorCores[cores[3]];
            
            const d1 = tabelaDeValores[cores[0]].valor;
            const d2 = tabelaDeValores[cores[1]].valor;
            const multiplicador = tabelaDeValores[cores[2]].mult;
            const tolerancia = tabelaDeValores[cores[3]]?.tol;

            /*
            Mapeamento do cálculo
            *d1 e d2 formam o numero base (d1 = 1 e d2 = 0), isso é igual a 10;
            *O multiplicador define a escala (Ohms, K Ohms, M Ohms);
            *Tolerância vai definir a precisão do componente;
            */

            const valorOhm = (d1 * 10 + d2) * multiplicador;
            //ex: Marrom(1), Vermelho(2), Laranja(1000);
            //(1 * 10 + 2) * 1000 = 12 * 1000
            //12 * 1000 = 12000 Ohms ou 12k Ohms

            //Formatador para leitura do usuário (k = kilo, M = mega, G = giga)
            let exibicao =  valorOhm >= 1_000_000_000 ? (valorOhm / 1_000_000_000).toFixed(1) + "G":
                            valorOhm >= 1_000_000 ? (valorOhm / 1_000_000).toFixed(1) + "M":
                            valorOhm >= 1_000 ? (valorOhm / 1_000).toFixed(1) + "k":
                            valorOhm.toFixed(0);

            document.getElementById('valor-ohm').innerHTML = `${exibicao} Ω <small style="font-size: 0.8rem; color: #666;">(${tolerancia})</small>`;
        }
    


