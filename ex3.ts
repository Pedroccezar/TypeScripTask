interface ILivro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

const livro: ILivro = {
    titulo: 'Quincas Borba', 
    autor: 'Machado de Assis',
    anoPublicacao: 1892
}

function resumirLivro(livro: ILivro){
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}`
}

console.log(resumirLivro(livro));