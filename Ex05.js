const fizz = "fizz"
const buzz = "buzz"
var testNumbers = parseInt(prompt("Digite o número de testes:"));

for(let loopTest = 0 ; loopTest < testNumbers ; loopTest++ ) {
  let numero = parseInt(prompt("Digite o número"))
  if(numero % 3 === 0 && numero % 5 === 0){
    console.log(fizz+buzz)
  }
  else{
    if(numero % 3 === 0){
      console.log(fizz)
    }
    if(numero % 5 === 0){
      console.log(buzz)
    }
  }
}