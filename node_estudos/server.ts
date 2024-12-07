import express, { Request, Response } from 'express';
import retornaUsuarios from './get_users';

const app = express();
const port = 3000

// Middleware para processar dados no formato JSON
app.use(express.json());  // Para processar dados JSON

app.post('/result', (req: Request, res: Response) => {
  const { nome, idade } = req.body;  // Extrair os dados de nome e idade do corpo da requisição
  res.send(`Nome: ${nome}, Idade: ${idade}`);
});

app.get('/', (req: Request, res: Response) => {
  const { faculdade, ano } = req.query;
  res.send(`faculdade: ${faculdade}, ano1: ${ano}`)
})


// 1. Criar uma rota POST com dados assíncronos
// Crie uma rota POST que simula o envio de dados (como um formulário de cadastro) e, após processar esses dados de forma assíncrona, retorne uma resposta com o status de sucesso ou erro.

const processaDados = async (data: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.nome) {
        resolve(`Usuário ${data.nome} cadastrado com sucesso.`)
      }
      else {
        reject(`Erro`)
      }
    }, 200);

  });

};




app.post('/forms', async (req: Request, res: Response) => {

  try {
    const result = await processaDados(req.body);
    res.status(200).send(result)
  } catch (erro) {
    res.status(404).send(erro)

  }

});




app.get('/pegar_dados', async (req: Request, res: Response) => {

  try {
    const { id } = req.query
    console.log(id)
    const usuarios = await retornaUsuarios();
    const usuariosFiltrados = usuarios.filter((usuario: any) => usuario.id === Number(id));
    res.status(200).send(usuariosFiltrados)

  } catch (error) {
    res.status(404).send(`Error ${error}`)
  }


})



app.get('/soma', (req: Request, res: Response) => {
  const soma = 1 + 1;
  res.send(soma+"");  
});

app.get('/mod', (req: Request, res: Response) => {
  const mod = 1 % 1;
  res.send(mod+""); 
});

app.get('/elevado', (req: Request, res: Response) => {
  const elevado = 2 ** 2;
  res.send(elevado+""); 
});





app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); 
