// Usando types no retorno de uma função:

// Usando os types nos parâmetros de uma função:

function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}

let nome = firstLetterUpperCase('Vanessa');

// exemplo 2
 
function somar(n1: number, n2: number): number {
    return n1 + n2;
}

let soma = somar(12, 56);