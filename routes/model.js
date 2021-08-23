import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;
const ObjectId = Schema.ObjectId;

export const User = new Schema({
    name: {
        type: String,
        required: true,
        max: [50, 'Try a name with less than 50 characters'],
    },
    lastName: {
        type: String,
        required: true,
        max: [50, 'Try a lastname with less than 50 characters'],
    },
    birthday: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    creationDate: Date
})

export default {
    User
}
