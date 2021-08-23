import Mongoose from 'mongoose';
import { DbConnectionError } from '../../errors/dbConnection.js';

export const connectMongo = async () => {
    let mongoConnection;
    try {
        mongoConnection = await Mongoose.connect(process.env.DB_CONN_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (error) {
        throw new DbConnectionError('connection error:');
    }
    console.log('Successfully connected to database!');
    return mongoConnection;
}


export default {
    connectMongo
}