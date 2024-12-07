
function atualizarUsuario(usuario: Record<string, any>, propriedade: string, numero: number) {
    usuario[propriedade] = numero 
    return usuario

}


// @ts-ignore
const usuario = { nome: "Maria", idade: 30, email: "maria@gmail.com" };

const usuarioAtualizado = atualizarUsuario(usuario, "idade", 35);
console.log(usuarioAtualizado);
