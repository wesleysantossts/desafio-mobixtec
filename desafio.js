const espaco = " ";
const hashtag = "#";
const vetor = [];
const vetorString = vetor.join(""); 
vetor.push(hashtag.repeat(21));
const n = parseInt(prompt("Quantos minutos você quer contar na ampulheta? Apenas números (Número igual ou maior que 20 e menor ou igual a 84)"));
const inputUsuario = n - 20;

// Verificação do valor digitado
while(n < 20){
  alert("Digite um número maior ou igual a 20.");
  console.log("Digite um número maior ou igual a 20.");

  n = parseInt(prompt("Quantos minutos você quer contar na ampulheta? Apenas números (Número igual ou maior que 20 e menor ou igual a 84)"));
};

console.log(`Número digitado: ${n}.\n`);

// Parte superior da ampulheta

// Topo da ampulheta
console.log(vetor.join(""));

// Parte superior da ampulheta - ok
for(let i = 0; i <= 8; i++){
  const valorAjustadoUm = espaco.repeat(i) + hashtag + espaco.repeat(9 - i) + espaco.repeat(8 - i) + hashtag;
  const espacoHashtagUm = espaco.repeat(i);

  console.log(`#${valorAjustadoUm}${espacoHashtagUm}#`);
};

// Função da parte inferior da ampulheta - ok
function preencher(valorUsuario){

  // linha 1
  console.log(`#${espaco.repeat(9)}#${espaco.repeat(9)}#`);
  
  // linha 2 - ok
  // espaco lateral - 8, limite hashtags - 1 (corresponde ao valor 84 passado pelo usuario)
  console.log(`#${espaco.repeat(8)}#${valorUsuario > (15 + 13 + 11 + 9 + 7 + 5 + 3) && valorUsuario <= (15 + 13 + 11 + 9 + 7 + 5 + 3 + 1) ? hashtag.repeat(valorUsuario - (15 + 13 + 11 + 9 + 7 + 5 + 3)) + espaco.repeat(1 - (valorUsuario - (15 + 13 + 11 + 9 + 7 + 5 + 3))) : (valorUsuario > (15 + 13 + 11 + 9 + 7 + 5 + 3 + 1)) ? hashtag.repeat(1) : espaco.repeat(1)}#${espaco.repeat(8)}#`); 
  
  // linha 3 - ok
  // espaco lateral - 7, limite hashtags - 3 (corresponde ao valor 83 passado pelo usuario)
  console.log(`#${espaco.repeat(7)}#${valorUsuario > (15 + 13 + 11 + 9 + 7 + 5) && valorUsuario <= (15 + 13 + 11 + 9 + 7 + 5 + 3) ? hashtag.repeat(valorUsuario - (15 + 13 + 11 + 9 + 7 + 5)) + espaco.repeat(3 - (valorUsuario - (15 + 13 + 11 + 9 + 7 + 5))) : (valorUsuario > (15 + 13 + 11 + 9 + 7 + 5 + 3)) ? hashtag.repeat(3) : espaco.repeat(3)}#${espaco.repeat(7)}#`); 
  
  // linha 4 - ok
  // espaco lateral - 6, limite hashtags - 5 (corresponde ao valor 80 passado pelo usuario)
  console.log(`#${espaco.repeat(6)}#${valorUsuario > (15 + 13 + 11 + 9 + 7) && valorUsuario <= (15 + 13 + 11 + 9 + 7 + 5) ? hashtag.repeat(valorUsuario - (15 + 13 + 11 + 9 + 7)) + espaco.repeat(5 - (valorUsuario - (15 + 13 + 11 + 9 + 7))) : (valorUsuario > (15 + 13 + 11 + 9 + 7 + 5)) ? hashtag.repeat(5) : espaco.repeat(5)}#${espaco.repeat(6)}#`); 
  
  // linha 5 - ok
  // espaco lateral - 5, limite hashtags - 7 (corresponde ao valor 75 passado pelo dev no input)
  console.log(`#${espaco.repeat(5)}#${valorUsuario > (15 + 13 + 11 + 9) && valorUsuario <= (15 + 13 + 11 + 9 + 7) ? hashtag.repeat(valorUsuario - (15 + 13 + 11 + 9)) + espaco.repeat(7 - (valorUsuario - (15 + 13 + 11 + 9))) : (valorUsuario > (15 + 13 + 11 + 9 + 7)) ? hashtag.repeat(7) : espaco.repeat(7)}#${espaco.repeat(5)}#`); 
  
  // linha 6 - ok
  // espaco lateral - 4, limite hashtags - 9 (corresponde ao valor limite 68 passado pelo dev no input)
  console.log(`#${espaco.repeat(4)}#${valorUsuario > (15 + 13 + 11) && valorUsuario <= (15 + 13 + 11 + 9) ? hashtag.repeat(valorUsuario - (15 + 13 + 11)) + espaco.repeat(9 - (valorUsuario - (15 + 13 + 11))) : (valorUsuario > (15 + 13 + 11 + 9)) ? hashtag.repeat(9) : espaco.repeat(9)}#${espaco.repeat(4)}#`); 

  // linha 7 - ok
  // espaco lateral - 3, limite de hashtags - 11 (corresponde ao valor limite 59 passado pelo dev no input)
  console.log(`#${espaco.repeat(3)}#${valorUsuario > (15 + 13) && valorUsuario <= (15 + 13 + 11) ? hashtag.repeat(valorUsuario - (15 + 13)) + espaco.repeat(11 - (valorUsuario - (15 + 13))) : (valorUsuario > (15 + 13 + 11)) ? hashtag.repeat(11) : espaco.repeat(11)}#${espaco.repeat(3)}#`);
  
  // linha 8 - ok
  // espaço lateral - 2, limite de hastags - 13 (corresponde ao valor limite 47 passado pelo dev no input)
  console.log(`#${espaco.repeat(2)}#${valorUsuario > 15 && valorUsuario <= (15 + 13) ? hashtag.repeat(valorUsuario - 15) + espaco.repeat(13 - (valorUsuario - 15)) : (valorUsuario > 28) ? hashtag.repeat(13) : espaco.repeat(13)}#${espaco.repeat(2)}#`);

  // linha 9 - ok
  // espaço lateral 1; limite hashtag - 15 (corresponde ao valor limite 34 passado pelo dev no input)
  console.log(`#${espaco.repeat(1)}#${valorUsuario <= 15 ? hashtag.repeat(valorUsuario) : hashtag.repeat(15)}${valorUsuario <= 15 ? espaco.repeat(15 - valorUsuario) : espaco.repeat(15)}#${espaco.repeat(1)}#`);

  // Base ampulheta
  console.log(vetor.join(""));
};

preencher(inputUsuario);