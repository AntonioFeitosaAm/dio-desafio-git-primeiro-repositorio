enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadorDeFutebol,
    Pintor
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}
interface Estudante extends Pessoa {
    materias: string[]
}
const pessoa = {
    nome: 'Fabiana',
    idade: 28,
    profissao: Profissao.Desenvolvedora
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: Profissao} = {
    nome: 'Andre',
    idade: 25,
    profissao: Profissao.Pintor
}

const paula: {nome: string, idade: number, profissao: Profissao} = {
    nome: 'Paula',
    idade: 25,
    profissao: Profissao.Professora
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática descreta', 'Programação']

}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática descreta', 'Programação']

}
function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item );
    }
}

listar(monica.materias);