// Contextual Typing em funções anônimas:
 
let names = ['Emilly', 'Thiago', 85]; 

names.forEach( function(nome)) {
    if(typeof nome === 'string') {
        console.log(nome.toUpperCase());
    } else {
        console.log(nome);
    }
};