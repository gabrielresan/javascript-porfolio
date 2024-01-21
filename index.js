console.log("Loading");

let userName = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade atual: "));
let idadeAposentar = parseInt(
  prompt("Digita a idade com a qual deseja se aposentar:")
);

let tempoAposentar = idadeAposentar - idade;

alert(`${userName}, faltam ${idadeAposentar} anos para você se aposentar!`);
