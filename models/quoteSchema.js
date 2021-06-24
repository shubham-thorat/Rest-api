import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    quoteID: {
        type: Number,
        required: true,
        unique: true
    },
    quote: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    }
})

const Quote = mongoose.model('quotes', movieSchema);

export default Quote