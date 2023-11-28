//1-Solicitar dpis numeros
//2-Solicitar a operação
//3-Realizar o cálculo
//4-Mostrar o resultado

let resultado; //declarando variavel
let num1 = parseFloat(prompt("Digite o primeiro numero:")); //declarando e atribuindo
let num2 = parseFloat(prompt("Digite o primeiro dois:"));
let operacao = prompt("Digite a operação: [+] para adição | [-] para subtração | [x] para multiplicação | [/] para divisão")

if (isNaN(num1) == true || isNaN(num2) == true) { // is Nan not a number ????????
       alert('Operação inválida');
       resultado = 'Ta errado cara';
}
else {
       if (operacao == '+') {
              resultado = num1 + num2
       }
       else if (operacao == '-') {
              resultado = num1 - num2
       }
       else if (operacao == 'x') {
              resultado = num1 * num2 
       }
       else if (operacao == '/') {
              resultado = num1 / num2
       }
       else{
              resultado = 'Operação Invalidáaaaaaaaaaaaaaaaa!'
       }
}
document.write('<p class="resultado"> ', resultado);
document.write('</p>');