import express from 'express';

const app = express();
app.use(express.json());

//Rota: Endereço completo da requisição
//Recurso: Qual entidade do sistema estamos acessando

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//Request Param: Parâmetros que vem na própria rota que identificam um recurso (parâmetro obrigatório)
//Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
//Request Body: Parâmetros para criação/atualização de informações

const users = [
    'Kelly',
    'Claudia',
    'Lucas',
    'Maria',
    'André'
]


app.get('/users', (request, response) => {

    const search = String(request.query.search);

    const filteredUsers = users.filter(user => user.includes(search));

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
})

app.listen(3333);