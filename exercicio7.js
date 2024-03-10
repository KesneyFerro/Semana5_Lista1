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

// Instâncias de animais: gato e cachorro
const gato = new Animal("Gato", 15);
const cachorro = new Animal("Cachorro", 35);

// Exibe a descrição de cada animal
console.log(gato.descrever());
console.log(cachorro.descrever());