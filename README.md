# PROVA_02_FINAL_LEONARDO
Prova 02 professor Valentim

# ⚡ EletronTools JS
Uma coleção de scripts em JavaScript para cálculos fundamentais de eletrônica e elétrica.

Este repositório contém ferramentas práticas para estudantes e profissionais da área, cobrindo desde a Lei de Ohm até a identificação de componentes por cores.

---

## 🛠️ Ferramentas Inclusas

### 1. 💡 Cálculo de Consumo de Energia
Calcula o consumo diário em kWh e a estimativa de custo mensal de um eletrodoméstico.
* **Entradas:** Nome do aparelho, potência (W ou kW), tempo de uso e taxa da concessionária.
* **Saída:** Consumo diário e valor da conta ao final de 30 dias.

### 2. 🔌 Calculadora da Lei de Ohm
Resolve as três variáveis fundamentais do circuito elétrico:
* **Tensão (V):** $V = R \cdot I$
* **Corrente (I):** $I = V / R$
* **Resistência (R):** $R = V / I$

### 3. 📏 Conversor de Escalas Métricas
Converte valores entre diferentes prefixos do Sistema Internacional (SI), cobrindo de **Tera (10¹²)** até **Pico (10⁻¹²)**.
* Utiliza manipulação de expoentes para precisão matemática.

### 4. 🎨 Leitor de Resistores (4 e 5 Cores)
Traduz as faixas coloridas de um resistor para seu valor de resistência em Ohms ($\Omega$).
* **Funcionalidades:** Manipulação de DOM para feedback visual das cores e formatação automática de unidades (ex: 1000 $\Omega$ → 1k $\Omega$).
* **Tolerância:** Inclui o cálculo da margem de erro baseada na última cor.

### 5. 🖇️ Associação de Resistores
Calcula a resistência equivalente para dois tipos de arranjos:
* **Série:** Soma simples dos valores.
* **Paralelo:** Soma dos inversos ($1/R_{eq} = \sum 1/R_n$).
* **Destaque:** Implementado com o método `.reduce()` para suportar N resistores.

---

## 🚀 Como Executar
1. Copie o código da ferramenta desejada.
2. Cole no console do seu navegador (F12 > Console) ou em um arquivo `.js` vinculado a um HTML.
3. Siga as instruções nos `prompts` que aparecerão na tela.

---

## 📝 Tecnologias Utilizadas
* **JavaScript (ES6+):** Lógica, cálculos e manipulação de arrays.
* **HTML5/CSS3:** Utilizados nos scripts de resistores para representação visual.