class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(item) {
        this.itens.push(item)
    }

    dequeue() {
        if(!this.isEmpty()) {
            return this.itens.shift()
        } else {
            throw new Error('dequeue from empty queue')
        }
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.itens[0];
        } else {
            throw new Error("peek from empty stack")
        }
    }
 
}


const fila = new Fila();
fila.enqueue(1);
fila.enqueue(2);
console.log(fila.dequeue());
console.log(fila.peek());


/* Métodos:
1 - Push: Incluir (Na última posiç a)
2 - Pop: Remover (remove o último)

Objetivo: Ordem de processamento

Casos de uso: 
1 - Sistema de impressão, 
2 - Filas de atendimentos e serviços, 
3 - Geranciamento de Threads
4 - Sistema operacionais
*/