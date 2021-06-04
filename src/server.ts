import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

const users = [
    'Kelly',
    'Claudia',
    'Lucas',
    'Maria',
    'André'
]

app.listen(3333);