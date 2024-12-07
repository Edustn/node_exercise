interface Carro {
    marca: string,
    modelo: string,
    ano: number,
    cor: string
}


let carro: Carro = {
    marca: "Chevrolet", 
    modelo: "Corsa",
    ano: 2012,
    cor: "Cinza"
}



Object.keys(carro).forEach(key => {
    // @ts-ignore
    const value = carro[key];
    console.log(`Key: ${key}, Value: ${value}`)
});