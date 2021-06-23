import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    movieID: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: String
    },
    rating: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    overview: {
        type: String
    }
})

const Movie = mongoose.model('movies', movieSchema);

export default Movie