// Definição da classe Animal
class Animal {
    constructor(nome, idade) {
        // Atributos do animal: nome e idade
        this.nome = nome;
        this.idade = idade;
    }

    // Método para descrever o animal
    descrever() {
        // Retorna uma string descrevendo o animal com seu nome e idade
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`;
    }
}

// Definição da classe Gato que herda de Animal
class Gato extends Animal {
    constructor(nome, idade, cor) {
        // Chama o construtor da classe pai e passa os parâmetros necessários
        super(nome, idade);
        // Atributo específico de Gato: cor
        this.cor = cor;
    }

    // Método para o gato miar
    miar() {
        // Retorna uma string representando o miado do gato com seu nome
        return `Eu (${this.nome}) faço MIAU!`;
    }

    // Sobrescreve o método descrever da classe Animal
    descrever() {
        // Retorna a descrição do gato, chamando o método descrever da classe pai e adicionando a cor
        return `${super.descrever()} Sou um gato da cor ${this.cor}.`;
    }
}

// Instância de um gato e de um animal
const gato = new Gato("Gato", 15, "Púrpura");
const cachorro = new Animal("Cachorro", 35);

// Exibe a descrição do cachorro e do gato, e o miado do gato
console.log(cachorro.descrever());
console.log(gato.descrever());
console.log(gato.miar());
