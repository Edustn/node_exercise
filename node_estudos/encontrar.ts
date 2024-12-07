let array = ["Joao", "Luigi", "Eduardo", "Lugli", "Leandro"]

// remove o primeiro elemento da lista
array.shift()

let found_element  = array.find((element) => element == "Luigi")

console.log(found_element)