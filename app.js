import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import { dbConnection } from './database/index.js';

import usersRouter from './routes/users.js';

dotenv.config()

const connect = dbConnection(process.env.DB_PROVIDER);

await connect();

export const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter.router);

export default { app };
