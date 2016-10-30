import express from 'express';
import config from './config/config';
import datasource from './config/datasource';
import bodyParser from 'body-parser';
import booksRouter from './routes/books';

const app = express();

app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParser.json());
const Books = app.datasource.models.Books;
booksRouter(app, Books);

export default app;