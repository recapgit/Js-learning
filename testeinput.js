import inptdados from 'readline-sync';

//let string = inptdados.question('Insira string: ');
//console.log('String: ' + string);

/* let x = Number(inptdados.question("insira um valor x: "));
let y = Number(inptdados.question("insira y: "));

let soma = x+y;
console.log(soma); */

let carro = { nome: "Fusca", ano: 1969, cor: "azul" }; 

for (let prop in carro) {
    if (prop == "ano") {    
            console.log(prop + ": " + carro[prop]);
            let ano = prop;
            console.log(ano);
            console.log(prop[ano]);
        }
}