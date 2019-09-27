import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const NoteScheme = new Schema({
    title: {
        type: String,
        required: "Gouter lundi"
    },
    text: {
        type: String,
        required: "Type de gouter"
    },
    DueDate: {
        type: String,
        required: "10.12.2012"
    },
    date: {
        type: Date,
        default: new Date
    },
    email: {
        type: String,
        default: "emailAdress"
    }
});

export default mongoose.model('Note', NoteScheme);