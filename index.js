import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Luiza";
cliente2.cpf = 11122233308;

const conta1 = new ContaCorrente();
conta1.ag = 1001;
conta1.cliente = cliente1;
conta1.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = 0;
conta2.ag = 1020;

conta1.transferir(200, conta2);

console.log(conta2.saldo);