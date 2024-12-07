// interface Usuario {
//     nome: string,
//     idade: number,
//     email: string
//     endereco: string = { rua: string, cidade: string, estado: string}
// }

// let usuario: Usuario = {
//     nome: "Cecilia",
//     idade: 21,
//     email: "cecilia.goncalves@gmail.com"
// }


// console.log(usuario)

// usuario.idade = 22

// console.log(usuario)


// usuario.endereco = "Rua das Flores, 123";

// console.log(usuario)

// @ts-ignore
let usuario: { 


    nome: string,
    idade: number,
    email?: string,
    endereco?: { rua: string, cidade: string, estado: string }
}


usuario = {
    nome: "Cecilia",
    idade: 21,
    email: "ceccilia.goncalves@gmail.com",
};


usuario.endereco = {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
};


console.log(usuario)