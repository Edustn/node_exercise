interface Livros {
    titulo: string;
    autor: string;
    ano: number;

}

interface Biblioteca {
    categorias: {
        nome: string;
        livros: Livros[];
    }[];
}

const biblioteca: Biblioteca = {
    categorias: [
        {
            nome: "Ficção",
            livros: [
                { titulo: "Batman", autor: "Matt Wagner", ano: 2006 },
                { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 }
            ]
        },
        {
            nome: "Ciência",
            livros: [
                { titulo: "Uma Breve História do Tempo", autor: "Stephen Hawking", ano: 1988 },
                { titulo: "O Gene Egoísta", autor: "Richard Dawkins", ano: 1976 }
            ]
        }
    ]
};

function buscaLivors(nomeCategoria: string): Livros[] {
    const categoria = biblioteca.categorias.find(cat => cat.nome === nomeCategoria);
    return categoria ? categoria.livros : [];
}



const livrosFiccao = buscaLivors("Ficção");
console.log("Livros de Ficção:", livrosFiccao);

