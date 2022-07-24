"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
    Profissao[Profissao["Pintor"] = 4] = "Pintor";
})(Profissao || (Profissao = {}));
const pessoa = {
    nome: 'Fabiana',
    idade: 28,
    profissao: Profissao.Desenvolvedora
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: Profissao.Pintor
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: Profissao.Professora
};
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática descreta', 'Programação']
};
const monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática descreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
