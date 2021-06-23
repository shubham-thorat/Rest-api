import mongoose from 'mongoose'

const idSchema = mongoose.Schema({
    collection_name: {
        type: String,
        required: true
    },
    lastID: {
        type: Number,
        required: true
    }
})

const ID = mongoose.model('ids', idSchema);
export default ID