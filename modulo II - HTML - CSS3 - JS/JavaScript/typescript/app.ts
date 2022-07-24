let anyEstaDeVolta: any;

anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: String = 'verificar'
stringTest = anyEstaDeVolta;



let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'Opa';
unknownValor = true;
unknownValor = 'Vai sim';

let stringTest2: string = 'agora vai';

if(typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
//stringTest2 = unknownValor; 

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);