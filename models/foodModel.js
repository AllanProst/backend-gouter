import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for foods
 */

const FoodScheme = new Schema({
    title: {
        type: String,
        required: "Gouter"
    },
    reason: {
        type: String,
        required: "Hacked/Nouvel arrivant"
    },
    dueDate: {
        type: Date,
        required: "10.12.2012"
    },
    timeStamp: {
        type: Date,
        default: new Date
    },
    email: {
        type: String,
        required: "Email"
    },
    name: {
        type: String,
        required: "NickName"
    }
});

export default mongoose.model('Food', FoodScheme);