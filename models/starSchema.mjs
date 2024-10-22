import mongoose from 'mongoose';

const starSchema = new mongoose.Schema({
    sign: {
        type: String,
        required: true,
    },
    trait: {
        type: String,
        required: true,
    },
    date: {
        type: String
    }
});

starSchema.index({name: 1})

export default mongoose.model('Star', starSchema);