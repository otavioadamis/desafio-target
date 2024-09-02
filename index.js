//1

const indice = 13;
let soma = 0;
let k = 0;

while(k < indice){
    k++;
    soma+=k;
}
console.log("Questao 1:")
console.log(soma);

//2
function isFibNumber(num){
    let a = 0;
    let b = 1;
    if(num === 0 || num === 1){
        return `O numero fornecido (${num}) pertence a sequencia fibonacci`;
    }

    let prox = a + b;

    while(prox <= num) {
        if(prox === num){
            return `O número ${num} pertenec a sequencia fibonacci.`
        }
        a = b;
        b = prox;
        prox = a + b;
    }
    return `O numero ${num} nao pertence a sequencia fibonacci`
}


const numero = 43;
const resultado = isFibNumber(numero);
console.log("Questao 2:")
console.log(resultado);

//3

const faturamento = require('./faturamento.json').faturamento_diario;

function calcularFaturamento(faturamento) {
  const diasComFaturamento = faturamento.filter(valor => valor > 0);
  
  const menorFaturamento = Math.min(...diasComFaturamento);
  const maiorFaturamento = Math.max(...diasComFaturamento);

  const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
  const mediaMensal = somaFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia
  };
}

const result = calcularFaturamento(faturamento);

console.log("Questao 3:")
console.log(`Menor valor de faturamento: ${result.menorFaturamento}`);
console.log(`Maior valor de faturamento: ${result.maiorFaturamento}`);
console.log(`NUmero de dias com faturamento superior a media mensal: ${result.diasAcimaDaMedia}`);

//4

const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  function calcularPercentualRepresentacao(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentualPorEstado = {};
  
    for (const estado in faturamento) {
      percentualPorEstado[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
    }
  
    return percentualPorEstado;
  }
  
  const res = calcularPercentualRepresentacao(faturamentoPorEstado);
  
  console.log("Questao 4:")
  console.log("Percentual de representacao por estado:");
  for (const estado in res) {
    console.log(`${estado}: ${res[estado]}%`);
}

//5

function inverterString(str) {
    let stringInvertida = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
  
    return stringInvertida;
}
  
const original = "string";
const invertida = inverterString(original);

console.log("Questao 5:")
console.log(`String original: ${original}`);
console.log(`String invertida: ${invertida}`);
