let calcularMedia = (a, b, c) => {
  return Math.floor((a + b + c) / 3);
};

let calcularMaior = (a, b, c) => {
  if (a >= b) {
    if (a >= c) {
      return a;
    } else return c;
  } else if (b >= c) {
    return b;
  } else return c;
};

let calcularMenor = (a, b, c) => {
  if (a <= b) {
    if (a <= c) {
      return a;
    } else return c;
  } else if (b <= c) {
    return b;
  } else return c;
};

alert(
  "Este programa define a média, maior e menor valores dentro de uma sequencia de 3 numeros"
);

let num1 = parseInt(prompt("Digite o numero 1: "));
let num2 = parseInt(prompt("Digite o numero 2: "));
let num3 = parseInt(prompt("Digite o numero 3:"));

alert(
  `A média é: ${calcularMedia(
    num1,
    num2,
    num3
  )} \n O maior valor é: ${calcularMaior(
    num1,
    num2,
    num3
  )} \n O menor valor é ${calcularMenor(num1, num2, num3)}`
);
