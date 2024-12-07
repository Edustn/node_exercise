type Livro = { titulo: string; autor: string };

function ordenarLivrosPorTitulo(obj: Livro[]) {

    console.log(obj.sort((a, b) => a.titulo.localeCompare(b.titulo)));


}

const livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes" },
];

const livrosOrdenados = ordenarLivrosPorTitulo(livros);
console.log(livrosOrdenados);
