# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

**A) Imprime os números pares de 1 a 10.**

~~B) Imprime os números ímpares de 1 a 10.~~

~~C) Imprime os números pares de 2 a 10.~~

~~D) Imprime os números ímpares de 2 a 10.~~

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

**A) let carro = new Carro("Toyota");**

~~B) let ligar = new ligar("Toyota");~~

~~C) class Moto extends Veiculo {};~~

~~D) carro1.ligar();~~

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

**A) 18**

~~B) 16~~

~~C) 14~~

~~D) 12~~

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

**A) ![Uma imagem](assets/ex04_1.PNG)**

~~B) ![Uma imagem](assets/ex04_2.PN)~~

~~C) ![Uma imagem](assets/ex04_3.PN)~~

~~D) ![Uma imagem](assets/ex04_4.PN)~~

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

**A) ![Uma imagem](assets/ex05_1.PNG)**

~~B) ![Uma imagem](assets/ex05_2.PN)~~

~~C) ![Uma imagem](assets/ex05_3.PN)~~

~~D) ![Uma imagem](assets/ex05_4.PN)~~

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

**A) "Olá, meu nome é João. Olá, meu nome é Maria."**

~~B) "Olá, meu nome é ."~~

~~C) "João Maria"~~

~~D) "undefined undefined"~~

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

**Resposta:**
```javascript
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
```

______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

**Resposta:**
```javascript
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

```

______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

**Resposta:**
```javascript
// Definição da classe SomadorDeNotas
class SomadorDeNotas {
    constructor(){
        // Inicializa o total como zero
        this.total = 0;
    }

    // Método para adicionar uma nota ao total
    adicionarNota(nota){
        // Soma a nota ao total atual
        this.total += nota;
    }

    // Método para exibir o total de pontos
    verTotal(){
        // Retorna uma mensagem com o total de pontos
        return `O seu total é de ${this.total} pontos`;
    }
}

// Instância da classe SomadorDeNotas
const somador = new SomadorDeNotas();

// Adicionando notas ao somador
somador.adicionarNota(10);
somador.adicionarNota(9.0);
somador.adicionarNota(9.5); 

// Exibe o total de pontos
console.log(somador.verTotal());

```

______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

**Resposta:**
```javascript
// Definição de constantes para valor da hora/aula e semanas por mês
let valorHoraAula = 30;
let semanasMes = 5.25;

// Definição da classe base Funcionario
class Funcionario {
    constructor(nome, idade, salarioBase) {
      // Atributos do funcionário: nome, idade e salário base
      this.nome = nome;
      this.idade = idade;
      this.salarioBase = salarioBase;
    }
  
    // Método para calcular o salário
    calcularSalario() {
      // Retorna o salário base formatado com duas casas decimais
      return this.salarioBase.toFixed(2); 
    }
}

// Definição da classe Professor que herda de Funcionario
class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horasAulaPorSemana) {
      // Chama o construtor da classe pai e passa os parâmetros necessários
      super(nome, idade, salarioBase);
      // Atributos específicos de Professor: disciplina e horas de aula por semana
      this.disciplina = disciplina;
      this.horasAulaPorSemana = horasAulaPorSemana;
    }
  
    // Método para calcular o salário de um professor
    calcularSalario() {
        // Cálculo do salário considerando horas de aula por semana, valor da hora/aula e semanas por mês
        let salarioCalculado = this.horasAulaPorSemana * valorHoraAula * semanasMes;
        // Verifica se o salário base é maior ou igual ao salário calculado
        if (this.salarioBase >= salarioCalculado){
            // Se sim, retorna o salário base formatado com duas casas decimais
            return this.salarioBase.toFixed(2); 
        } else {
            // Se não, retorna o salário calculado formatado com duas casas decimais
            return salarioCalculado.toFixed(2); 
        }
    }
}

// Instâncias de professores
const professor1 = new Professor("João", 40, 3250, "Matemática", 20);
const professor2 = new Professor("Maria", 35, 3500, "História", 25);

// Exibição dos salários dos professores
console.log(`${professor1.nome} - Salário: R$ ${professor1.calcularSalario()}`);
console.log(`${professor2.nome} - Salário: R$ ${professor2.calcularSalario()}`);

  
```