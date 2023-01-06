import { Schema, model } from 'mongoose';

const taskModel = new Schema({
    title: {
        type: String,
        required: true,
        tim: true
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

export default model('task', taskModel);