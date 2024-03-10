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