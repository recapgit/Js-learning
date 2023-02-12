import rls from 'readline-sync'

let valororig, valorfinal, dias, juros;

valororig = rls.question("informe o valor da dívida: ");
dias = rls.question("dias desde o vencimento do boleto: ");

if (valororig > 0) {

    if (dias > 0) {

        if (dias > 15) {
            juros = 10;
        }
        else {
            juros = 5;
        }

        valorfinal = valororig + ((valororig / 100) * juros);

        console.log(
            'valor original da dívida: ' + valororig + '\n'
            + 'dias atrasados: ' + dias
            + 'taxa de juros: ' + juros
            + 'valor total de juros: ' + valorfinal
        );
        
    }
    else
    {
        console.log('Voce está em dia');
    }
}

else{
    console.log('Valor precisa ser positivo: ');
}

