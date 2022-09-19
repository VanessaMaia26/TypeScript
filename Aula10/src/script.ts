// type assertions

let idadeField = document.getElementById('idade') as HTMLInputElement;

console.log(idadeField.value);

//types literais 

type Opcoes = {
    width: number,
    height: number
}

function configurar(props: Opcoes | 'auto') {

}

configurar({width: 100, height: 200});
configurar('auto');

// interferêmncia literal

function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    //...
}

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
};

let req: RequestDetails = {
    url: 'httpd://www.google.com.br',
    method: 'GET'
};

fazerRequisicao(req.url, req.method);

// type para funções 

type MathFunction = (n1: number, n2: number) => number;

const somar01: MathFunction = (n1, n2) => {
    return n1 + n2;
}

const subtrair: MathFunction = (n1, n2) => {
    return n1 - n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: MathFunction = (n1, n2) => {
    return n1 / n2;
}

// retorno void

type QualquerFuncao = () => void;

const algo: QualquerFuncao = () => {
    return 12;
}

let retorno = algo();

const algo01 = (): void => {
    
}