import inptdados from 'readline-sync';

//let string = inptdados.question('Insira string: ');
//console.log('String: ' + string);

let x = Number(inptdados.question("insira um valor x: "));
let y = Number(inptdados.question("insira y: "));

let soma = x+y;
console.log(soma);