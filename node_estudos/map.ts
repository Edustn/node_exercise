const estoque = new Map()

estoque.set('Maçã', 10); // Adiciona 10 maçãs ao estoque
estoque.set('Banana', 20); // Adiciona 20 bananas ao estoque
estoque.set('Laranja', 15); // Adiciona 


// modificacao da quantidade de um produto especifico
estoque.set('Maçã', 25)

// existencia de um produto
console.log(estoque.has("Banana"))
console.log(estoque)