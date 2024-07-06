var matrizStr1 = prompt("Digite a matriz 1:");
var matrizStr2 = prompt("Digite a matriz 2:");

var matriz1 = JSON.parse(matrizStr1);
var matriz2 = JSON.parse(matrizStr2);

if (matriz1[0].length === matriz2.length) {
    var resultado = Array.from({ length: matriz1.length }, () => Array(matriz2[0].length).fill(0));
    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz2[0].length; j++) {
            for (let k = 0; k < matriz1[0].length; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }
    console.log("Resultado:");
    console.log(resultado);
} else {
    console.error("Não é possível multiplicar as matrizes.");
}
