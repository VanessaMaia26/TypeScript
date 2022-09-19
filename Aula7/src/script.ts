// Types em objetos:

function resumo (
    usuario: {nome: string, idade: number}
) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}

// Implementação da função

let u = {
    nome: 'Vanessa',
    idade: 19
};

resumo(u);