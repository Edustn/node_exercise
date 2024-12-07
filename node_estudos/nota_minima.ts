function filtrarAprovados(obj: Record<string, any>) {
    // let found_element  = array.find((element) => element > obj.nota)
    Object.keys(obj).forEach(key => {
        if (obj[key].nota > 6) {

            console.log(obj[key])
        }
    })


}


const alunos = [
    { nome: "João", nota: 6 },
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 7.5 },
];

const aprovados = filtrarAprovados(alunos); // Resultado esperado: [{ nome: "Ana", nota: 8 }, { nome: "Pedro", nota: 7.5 }]
console.log(aprovados);
