var aluno = prompt("Digite o nome do aluno: ");
var nota1 = parseFloat(prompt("Digite a 1a nota do " + aluno + ":"));
var nota2 = parseFloat(prompt("Digite a 2a nota do " + aluno + ":"));
var nota3 = parseFloat(prompt("Digite a 3a nota do " + aluno + ":"));

var media = ((nota1 + nota2 + nota3)/3);
if(media >= 6){
  alert(aluno + " foi aprovado! Com média " + media.toFixed(1));
}
else{
  alert(aluno + " foi reprovado! Com média " + media.toFixed(1));
}