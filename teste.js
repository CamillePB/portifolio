console.log("Hello World")
let nome = "camille"
const sobrenome = "bueno"
console.log(nome + " " + sobrenome)

nome = "pedro"
console.log(nome + " " + sobrenome)

let num1 = 30
let num2 = 40

console.log(num1 + num2)

function dividir(num1, num2){

  if(num2 === 0){
    return "Não é possivel dividir por zero"
  }

  //retornar resultado
  return num1/num2
}

let resultado = dividir(10,0)
console.log(resultado)
//ou
console.log(dividir(10,5))

//simplificar function e criar uma constante
const soma = (num1, num2) => num1 + num2
console.log(soma(10,5))

function tabudada(num1) {
  for(let cont = 1; cont <= 10; cont ++){
    //exibir a conta sem concatenação
    console.log(`${num1} x ${cont} = ${num1 * cont}`)
  }
}

tabudada(5)

const nomes = ["guilherme", "ana", "jude"]

//contagem da posição 
nomes.forEach(position => console.log(position))