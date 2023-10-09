class Calculadora {
    private operando1: number
    private operando2: number

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1
        this.operando2 = operando2
    }

    public somar(): number {
        return this.operando1 + this.operando2
    }

    public subtrair(): number {
        return this.operando1 - this.operando2
    }
}

const calculadora = new Calculadora(10, 18)
console.log("Soma: " + calculadora.somar())
console.log("Subtração: " + calculadora.subtrair())

/*
Não foi possível acessar diretamente
console.log(calculadora.operando1)
console.log(calculadora.operando2)
*/
class Hora {
    private hora: number
    private minutos: number
    private segundos: number

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora
        this.minutos = minutos
        this.segundos = segundos
    }

    public getHora(): number {
        return this.hora
    }

    public getMinutos(): number {
        return this.minutos
    }

    public getSegundos(): number {
        return this.segundos
    }
    
    public formatarHora(): string {
        const horaFormatada = this.hora.toString().padStart(2, "0");        
        const minutosFormatados = this.minutos.toString().padStart(2, "0")
        const segundosFormatados = this.segundos.toString().padStart(2, "0")
        return `${horaFormatada}:${minutosFormatados}:${segundosFormatados}`
    }
    /*O método padStart() preenche a string original com um determinado caractere, 
    ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. 
    O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada. Fonte: developer.mozilla.org */
}

const horaAtual = new Hora(5, 6, 7)
console.log("Hora: " + horaAtual.getHora())
console.log("Minutos: " + horaAtual.getMinutos())
console.log("Segundos: " + horaAtual.getSegundos())
console.log("Hora Formatada: " + horaAtual.formatarHora())

/*
Não foi possível acessar diretamente
console.log(horaAtual.hora)
console.log(horaAtual.minutos)
console.log(horaAtual.segundos)
*/

class Conta {
    private numero: string
    private saldo: number

    constructor(numero: string, saldoInicial: number) {
        this.numero = numero
        this.saldo = saldoInicial
    }

    public getNumero(): string {
        return this.numero
    }

    public getSaldo(): number {
        return this.saldo
    }

    public sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor
        }
    }

    public depositar(valor: number): void {
        this.saldo += valor
    }

    public transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor)
        contaDestino.depositar(valor)
    }
}

class Banco {
    private contas: Conta[] = [];

    public inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.getNumero())

        if (contaConsultada == null) {
            this.contas.push(conta)
        }
    }

    public consultar(numero: string): Conta | null {
        let contaConsultada: Conta | null = null
        for (let conta of this.contas) {
            if (conta.getNumero() == numero) {
                contaConsultada = conta
                break
            }
        }
        return contaConsultada;
    }

    private consultarPorIndice(numero: string): number {
        let indice: number = -1
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() == numero) {
                indice = i
                break
            }
        }
        return indice
    }

    public alterar(conta: Conta): void {
        let indice: number = this.consultarPorIndice(conta.getNumero())

        if (indice != -1) {
            this.contas[indice] = conta
        }
    }

    public excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero)

        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1]
            }

            this.contas.pop()
        }
    }

    public depositar(numero: string, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.depositar(valor)
        }
    }

    public sacar(numero: string, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor)
        }
    }

    public transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
        let contaCredito = this.consultar(numeroCredito)
        let contaDebito = this.consultar(numeroDebito)

        if (contaDebito && contaCredito) {
            contaDebito.transferir(contaCredito, valor)
        }
    }

    public getTotalDepositado(): number {
        let totalDepositado = this.contas.reduce((totalAcumulado: number, conta: Conta) => {
            return totalAcumulado + conta.getSaldo()
        }, 0)

        return totalDepositado
    }
}

// A tentativa de acessar diretamente os atributos privados das classes banco e conta tiveram o mesmo resultado das classes hora e calculadora.

const conta1 = new Conta("12345", 1000)
const conta2 = new Conta("54321", 2000)
const banco = new Banco()
banco.inserir(conta1)
banco.inserir(conta2)
console.log("Saldo da Conta 1: " + banco.consultar("12345")!.getSaldo())
banco.transferir("12345", "54321", 500)
console.log("Saldo da Conta 1 após transferência: " + banco.consultar("12345")!.getSaldo())
console.log("Saldo da Conta 2 após transferência: " + banco.consultar("54321")!.getSaldo())
console.log("Total depositado no banco: " + banco.getTotalDepositado())