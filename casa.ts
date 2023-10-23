class Endereco {
    rua: string
    numero: number
    cidade: string

    constructor(rua: string, numero: number, cidade: string) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
    }
}

class Moradia {
    area(): Number {
        return 200
    }

    Endereco(): Endereco {
        return new Endereco("Rua Nova", 40028922, "União")
    }
}

class Telhado {
    tipoTelha: string
    area: number

    constructor(tipoTelha: string, area: number) {
        this.tipoTelha = tipoTelha
        this.area = area
    }
}

class Parede {
    altura: number
    largura: number
    acabamento: string

    constructor(altura: number, largura: number, acabamento: string) {
        this.altura = altura
        this.largura = largura
        this.acabamento = acabamento
    }
}

class Espelho {
    tipoVidro: string
    altura: number
    largura: number

    constructor(tipoVidro: string, altura: number, largura: number) {
        this.tipoVidro = tipoVidro
        this.altura = altura
        this.largura = largura
    }
}

class Casa extends Moradia {
    telhaAreaExterna: Telhado
    telhaAreaInterna: Telhado
    paredeQuarto: Parede
    paredeBanheiro: Parede
    paredeCozinha: Parede
    espelhoCorredor: Espelho

    constructor() {
        super()
        this.telhaAreaExterna = new Telhado("Telha de Metal", 200)
        this.telhaAreaInterna = new Telhado("Telha de Barro", 100)
        this.paredeQuarto = new Parede(3, 5, "Parede Branca")
        this.paredeBanheiro = new Parede(3, 4, "Azulejo Impermeável")
        this.paredeCozinha = new Parede(3, 6, "Parede Lisa")
        this.espelhoCorredor = new Espelho("Vidro Temperado", 2, 0.7)
    }
}

const minhaCasa = new Casa()
console.log("Área da Casa:", minhaCasa.area())
console.log("Endereço da Casa:", minhaCasa.Endereco())
console.log("Telha Externa:", minhaCasa.telhaAreaExterna.tipoTelha)
console.log("Telha Interna:", minhaCasa.telhaAreaInterna.tipoTelha)
console.log("Área da Telha Externa:", minhaCasa.telhaAreaExterna.area)
console.log("Área da Telha Interna:", minhaCasa.telhaAreaInterna.area)
console.log("Parede do Quarto - Altura:", minhaCasa.paredeQuarto.altura)
console.log("Parede do Quarto - Largura:", minhaCasa.paredeQuarto.largura)
console.log("Parede do Quarto - Acabamento:", minhaCasa.paredeQuarto.acabamento)
console.log("Parede da Cozinha - Altura:", minhaCasa.paredeCozinha.altura)
console.log("Parede da Cozinha - Largura:", minhaCasa.paredeCozinha.largura)
console.log("Parede da Cozinha - Acabamento:", minhaCasa.paredeCozinha.acabamento)
console.log("Espelho do Corredor - Tipo de Vidro:", minhaCasa.espelhoCorredor.tipoVidro)
console.log("Espelho do Corredor - Altura:", minhaCasa.espelhoCorredor.altura)
console.log("Espelho do Corredor - Largura:", minhaCasa.espelhoCorredor.largura)