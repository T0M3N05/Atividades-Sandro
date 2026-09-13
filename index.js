const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let titular = "João da Silva";
let agencia = "0001";
let numeroConta = "12345-6";
let saldo = 1000.00;

function exibirMenu() {
    console.log("\n===============================");
    console.log("       CAIXA ELETRÔNICO        ");
    console.log("===============================");
    console.log("1. Consultar dados da Conta");
    console.log("2. Consultar Saldo");
    console.log("3. Realizar Débito (Saque)");
    console.log("4. Realizar Crédito (Depósito)");
    console.log("0. Sair");
    console.log("===============================");

    rl.question("Escolha uma opção: ", (opcao) => {
        tratarOpcao(opcao.trim());
    });
}

function tratarOpcao(opcao) {
    switch (opcao) {
        case "1":
            consultarDados();
            break;
        case "2":
            consultarSaldo();
            break;
        case "3":
            realizarDebito();
            break;
        case "4":
            realizarCredito();
            break;
        case "0":
            console.log("\nObrigado por utilizar nosso sistema bancário. Até logo!");
            rl.close();
            break;
        default:
            console.log("\nOpção inválida! Por favor, escolha um número entre 0 e 4.");
            exibirMenu();
            break;
    }
}

function consultarDados() {
    console.log("\n--- DADOS DA CONTA ---");
    console.log(`Titular: ${titular}`);
    console.log(`Agência: ${agencia}`);
    console.log(`Conta: ${numeroConta}`);
    exibirMenu();
}

function consultarSaldo() {
    console.log("\n--- SALDO ATUAL ---");
    console.log(`Saldo: ${saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    exibirMenu();
}

function realizarDebito() {
    rl.question("\nDigite o valor que deseja sacar (debitar): R$ ", (resposta) => {
        let valor = parseFloat(resposta.replace(',', '.'));

        if (isNaN(valor) || valor <= 0) {
            console.log("\nValor inválido! Operação cancelada.");
        } else if (valor > saldo) {
            console.log("\nSaldo insuficiente para realizar esta operação!");
        } else {
            saldo -= valor;
            console.log(`\nDébito de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso!`);
        }
        exibirMenu();
    });
}


function realizarCredito() {
    rl.question("\nDigite o valor que deseja depositar (creditar): R$ ", (resposta) => {
        let valor = parseFloat(resposta.replace(',', '.'));

        if (isNaN(valor) || valor <= 0) {
            console.log("\nValor inválido! Operação cancelada.");
        } else {
            saldo += valor;
            console.log(`\nCrédito de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso!`);
        }
        exibirMenu();
    });
}

exibirMenu();