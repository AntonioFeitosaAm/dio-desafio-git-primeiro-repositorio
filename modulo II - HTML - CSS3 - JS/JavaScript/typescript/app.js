"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'Opa';
unknownValor = true;
unknownValor = 'Vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
//stringTest2 = unknownValor; 
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
