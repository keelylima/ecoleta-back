import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    //request para obter dados sobre a requisição q ta acontecendo
    //se fosse rota de post, estaria os dados do usuário q precisa ser criado, por exemplo nome, email
    //response serve para devolver uma resposta para o browser

    console.log('Listagem de usuários');
    response.json([
        'Kelly',
        'Claudia',
        'Lucas',
        'Maria',
        'André'
    ]);
});

app.listen(3333);