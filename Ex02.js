var fahrenheit = parseFloat(prompt("Digite os graus em Fahrenheit: "));
var celsius = ((fahrenheit - 32) / 9) * 5;

alert("Convertendo para Celsius: " + celsius.toFixed(1));
