//1º Questão
import { Conta } from "./conta"
class Banco {
    contas: Conta[] = []

    consultar(numero: string): Conta | null {
        for (const conta of this.contas) {
            if (conta.numero === numero) {
                return conta
            }
        }
        return null
    }

    inserir(conta: Conta): void {
        
        const contaExistente = this.consultar(conta.numero)

        if (contaExistente) {
            console.log("Não é possível inserir uma conta com o mesmo número.")
        } else {
            this.contas.push(conta)
        }
    }

    sacar(numero: string, valor: number): void {
        const conta = this.consultar(numero)

        if (conta) {
            conta.sacar(valor)
        } else {
            console.log("Conta não encontrada.")
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
        const contaCredito = this.consultar(numeroCredito)
        const contaDebito = this.consultar(numeroDebito)

        if (contaCredito && contaDebito) {
            contaCredito.transferir(contaDebito, valor)
        } else {
            console.log("Uma das contas não foi encontrada.")
        }
    }

    quantidadeDeContas(): number {
        return this.contas.length
    }

    totalDinheiroDepositado(): number {
        let total = 0

        for (const conta of this.contas) {
            total += conta.saldo
        }

        return total
    }

    mediaSaldoDasContas(): number {
        const quantidade = this.quantidadeDeContas()
        const totalSaldo = this.totalDinheiroDepositado()

        if (quantidade > 0) {
            return totalSaldo / quantidade
        } else {
            return 0
        }
    }
}

const b: Banco = new Banco();
b.inserir(new Conta("11111-2", "ely", 100))
b.inserir(new Conta("22222-2", "joao", 200))
b.inserir(new Conta("33333-3", "maria", 300))

console.log("Quantidade de Contas: " + b.quantidadeDeContas())
console.log("Total de Dinheiro Depositado: " + b.totalDinheiroDepositado())
console.log("Média do Saldo das Contas: " + b.mediaSaldoDasContas())

b.sacar("33333-3", 100)
b.transferir("22222-2", "11111-2", 100)

console.log("Quantidade de Contas: " + b.quantidadeDeContas())
console.log("Total de Dinheiro Depositado: " + b.totalDinheiroDepositado())
console.log("Média do Saldo das Contas: " + b.mediaSaldoDasContas())

//2º Questão

class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0
    }

    curtir(): void {
        this.quantidadeCurtidas++
    }

    toString(): string {
        return `${this.texto} - Curtidas: ${this.quantidadeCurtidas}`
    }
}

class Microblog {
    postagens: Postagem[] = [];

    incluirPostagem(postagem: Postagem): void {
        this.postagens.push(postagem)
    }

    excluirPostagem(id: number): void {
        const indiceProcurado = this.postagens.findIndex(postagem => postagem.id === id);

        if (indiceProcurado !== -1) {
            this.postagens.splice(indiceProcurado, 1)
        }
    }

    postagemMaisCurtida(): Postagem | null {
        if (this.postagens.length === 0) {
            return null
        }

        let postagemMaisCurtida = this.postagens[0]
        for (const postagem of this.postagens) {
            if (postagem.quantidadeCurtidas > postagemMaisCurtida.quantidadeCurtidas) {
                postagemMaisCurtida = postagem
            }
        }

        return postagemMaisCurtida
    }

    curtirPostagem(id: number): void {
        const postagem = this.postagens.find(postagem => postagem.id === id)

        if (postagem) {
            postagem.curtir()
        }
    }

    toString(): string {
        let result = ""
        for (const postagem of this.postagens) {
            result += postagem.toString() + "\n"
        }
        return result.trim()
    }
}

const microblog = new Microblog()

const postagem1 = new Postagem(1, "Primeira postagem")
const postagem2 = new Postagem(2, "Segunda postagem")

microblog.incluirPostagem(postagem1)
microblog.incluirPostagem(postagem2)

console.log(microblog.toString())

//3º Questão

//Não consegui ler os arquivos