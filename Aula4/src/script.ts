// Usando os types nos parâmetros de uma função:

function firstLetterUpperCase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}

firstLetterUpperCase('Vanessa');