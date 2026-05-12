class Pilha {
    constructor() {
        this.itens = [];
    }

    push(item) {
        this.itens.push(item)
    }

    pop() {
        if(!this.isEmpty()) {
            return this.itens.pop()
        } else {
            throw new Error('pop from empty stack')
        }
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.itens[this.itens.length - 1];
        } else {
            throw new Error("peek from empty stack")
        }
    }
 
}


const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
console.log(pilha.pop());
console.log(pilha.peek());


/* Métodos:
1 - Push: Incluir   
2 - Pop: Remover


Casos de uso: 
1 - Algoritimos de backtrack, 
2 - Chamadas de funções, 
3 - undo de editores de texto 
4 - Call Stack
*/