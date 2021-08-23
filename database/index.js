import dotenv from 'dotenv';
import { DbConnectionError } from '../errors/dbConnection.js';
import { connectMongo } from './Providers/mongodb.js';

dotenv.config();

export const dbConnection = (dbProvider) => {
    switch (dbProvider) {
        case 'mongodb':
            return connectMongo;
        default:
            throw new DbConnectionError('Database not supported');
    }
}

export default {
    dbConnection
}
