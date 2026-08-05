type Genero = 'masculino' | 'feminino';

interface IPessoa {
    nome: string;
    idade: number;
    genero: Genero;
}

function apresentarPessoa(pessoa: IPessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`
}

const Pessoa: IPessoa = {
    nome: 'Pedro',
    idade: 19,
    genero: "masculino"
}

console.log(apresentarPessoa(Pessoa));