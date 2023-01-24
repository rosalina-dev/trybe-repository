///Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos, recomendamos que utilize a extensão Code Runner. Você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

//Adição (a + b)
let a = 3;
let b = 2;
console.log(a + b);

//Subtração (c - d)
let c = 332452;
let d = 223452;
console.log(c - d);

//Multiplicaçao (e * f)
let e = 32;
let f = 2234;
console.log(e * f);

//Divisao (g / h)
let g = 45
let h = 6
console.log(f / g);

//Módulo (i % j)
let i = 4
let j = 12
console.log(i % j);

console.log('Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.')

const num8 = 45
const num9 = 95
if (num8 > num9) {
  console.log('O primeiro número é maior')
}
else if (num8 < num9) {
  console.log('O segundo número é maior')
}
else if (num8 = num9) {
  console.log('Os números são iguais!')
}

console.log('Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.')

const num5 = 95
const num6 = 46
const num7 = 95

if (num5 > num7 && num5 > num6) {
  console.log('O primeiro número é maior')
}
else if (num6 > num7 && num6 > num5) {
  console.log('O segundo número é maior')
}
else if (num7 > num6 && num7 > num5) {
  console.log('O terceiro número é maior')
}

const ra = -4
if (ra > 0) {
  console.log("positive");
} else if ( ra < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

const ag1 = 90
const ag2 = 43
const ag3 = -47
let somaDosAng = ag1 + ag2 + ag3
let angPositivos = ag1 > 0 && ag2 > 0 && ag3 > 0

if (angPositivos) {
  if (somaDosAng === 180) {
    console.log(true);
  } else {
    console.log(false)
  }
} else {
  console.log('Erro: angulo invalido');
};
