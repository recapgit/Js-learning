import inpt from "readline-sync";

let salarios = [
    510.00,
    545.00,
    622.00,
    678.00,
    724.00,
    788.00,
    880.00,
    937.00,
    954.00,
    998.00,
    1045.00
];


let IPCA = ["5,91%",
    "6,50%",
    "5,84%",
    "5,91%",
    "6,41%",
    "10,67%",
    "6,29%",
    "2,95%",
    "3,75%",
    "4,31%",
    "4,52%"];

console.log(`Escolha uma opção: 
1 - listar salarios de 2010 a 2020
2 - Listar o índice IPCA de 2010 a 2020
3 - Comparar o aumento salarial com o IPCA`);
let input = Number(inpt.question("Digite: "));

switch (input) {
    case 1:
        for (const it of salarios) {
            var ano = 2010;
            console.log("Ano: " + ano);
            console.log("Salário: " + it.padEnd(15, '.') + "\n");
            ano++;
        }
        break;
    case 2:
        for (const it of IPCA) {
            var ano = 2010;
            console.log("Ano: " + ano);
            console.log("Inflação IPCA: " + it.padEnd(15, '.') + "\n");
            ano++;
        }
        break;
    case 3:
        var crescSalarial, ano = 2010;
        for (let i = 0; i < 11; i++) {
            crescSalarial = 0;

            var salario = salarios[i];
            var inflacao = IPCA[i];

            if (i > 0) {
                crescSalarial = ((salarios[i] - salarios[i - 1]) / salarios[i - 1]) * 100;
            }

            console.log(`\nAno: ${String(ano).padEnd(20, '.')}
Salário mínimo: R$ ${String(salarios[i]) + ",00".padEnd(20, '.')}
Cresc. Salarial: ${String(crescSalarial.toFixed(2)) + "%".padEnd(20, '.')}
Inflação IPCA: ${String(IPCA[i]) + "%".padEnd(20, '.')}`);

            ++ano;
        }
        break;
    default:
        console.log('Opção invalida');
        break;
}