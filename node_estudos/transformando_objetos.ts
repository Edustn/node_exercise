function aumetnoValor(obj: Record<string, number>, chave: string, porcentagem: number) {
    console.log(`A ${chave} teve um aumento de ${obj[chave] * (porcentagem / 100) + obj[chave]}`)
}


let valores = {
    'maça': 12
}

console.log(aumetnoValor(valores, 'maça', 15))



// const aumento = valores['maça'] * 0.15 + valores['maça']
// valores['maça'] = aumento
// console.log(valores)