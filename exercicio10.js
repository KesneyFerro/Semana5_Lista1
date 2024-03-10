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
