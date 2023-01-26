///let pizza1 = '4 Queijos';
///let pizza2 = 'Frango com Catupiry';
///let pizza3 = 'Marguerita';
///let pizza4 = 'Palmito';
///let pizza5 = 'chocolate';

let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'chocolate' ];

pizzas[5] = 'Peito de Peru';
pizzas.push('toscana');


console.log('Menu de sabores: ' + pizzas);

var numero = 7;

// 1 - Jogo da Pessoa Estudante 

let jogoTryber = [15, 14, 30, 19, 6, 51];
//console.log(jogoTryber.length)
//console.log(jogoTryber)

//2 - Criando o sorteio

let n1 = Math.floor(Math.random() * 60) + 1;
let n2 = Math.floor(Math.random() * 60) + 1;
let n3 = Math.floor(Math.random() * 60) + 1;
let n4 = Math.floor(Math.random() * 60) + 1;
let n5 = Math.floor(Math.random() * 60) + 1;
let n6 = Math.floor(Math.random() * 60) + 1;
let megaSenaJogo = [n1, n2 , n3, n4 , n5 , n6];
console.log(megaSenaJogo);

// 3 - Percorrendo os dois Arrays

console.log('Jogo Tryber:');
for (let index = 0; index < jogoTryber.length; index++) {
  console.log(jogoTryber[index]);
}
console.log('Jogo Mega Sena:');
for (let index = 0; index < megaSenaJogo.length; index++) {
  console.log(megaSenaJogo[index]);
}

// 4 - Comparando o jogo com o sorteio

let acertos = 0;

for (let iJogo = 0; iJogo < jogoTryber.length; iJogo++) {
  
  for (let iSorteio = 0; iSorteio < megaSenaJogo.length; iSorteio++) {

    if (jogoTryber[iJogo] == megaSenaJogo[iSorteio]) {
      acertos++;
    };
  }
}



// 5 Imprimindo resultados

console.log('Números de acertos:', acertos)