import mongoose from "mongoose";



const messageSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    conversationId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

const message = mongoose.model('Message', messageSchema);

export default message;