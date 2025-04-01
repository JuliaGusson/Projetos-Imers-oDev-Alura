idade = prompt("Quantos anos você tem?");
if (idade < 12) {
  alert("Acesso negado. Você precisar ter 18+ anos.");
}
if (idade >= 12) {
  escolhaJogador = prompt("Digite 1 (pedra) , 2 (papel) ou 3 (tesoura?)");
   if (escolhaJogador < 1 || escolhaJogador > 3) {
    alert("Número inválido. Por favor, digite 1, 2 ou 3.");
  } else {
  escolhaJu = Math.floor(Math.random() * 3) + 1;
  
  if (escolhaJogador == escolhaJu) {
    alert("Empatou, jogue de novo!!!");
  }

  if (escolhaJogador == 1) {
    if (escolhaJu == 2) {
      alert("A Ju ganhou! Ela jogou papel.");
    }
    if (escolhaJu == 3) {
      alert("Você ganhou! A Ju jogou tesoura.");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaJu == 1) {
      alert("Você ganhou! A Ju jogou pedra.");
    }
    if (escolhaJu == 3) {
      alert("A Ju ganhou! Ela jogou tesoura.")
    }
  }
  
  if (escolhaJogador == 3){
    if (escolhaJu == 1) {
      alert("A Ju ganhou! Ela jogou pedra.")
    }
    if (escolhaJu == 2) {
      alert("Você ganhou! A Ju jogou papel.")
    }
  }
  
  
  alert("A Ju jogou: " + escolhaJu);
}
}