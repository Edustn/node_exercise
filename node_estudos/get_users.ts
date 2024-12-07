import { promises as fs } from 'fs';


interface Usuario {
    id: number;
    nome: string;
    email: string;
    telefone?: string; // Se o telefone não for obrigatório
    endereco?: {
        rua: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    };
}



const retornaUsuarios = async (): Promise<Usuario[]> => {
    return new Promise(async (resolve, reject) => {
        setTimeout(async () => {
            try {
                // Lendo e parseando o JSON
                const dados = JSON.parse(await fs.readFile('banco.json', 'utf-8'));
                resolve(dados.usuarios);
            } catch (error) {
                reject('Não encontrado');
            }
        }, 200);
    });
};

export default retornaUsuarios;
