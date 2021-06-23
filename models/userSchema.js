import mongoose from 'mongoose'


const addressSchema = mongoose.Schema({
    city: String,
    state: String,
    country: String,
    pinCode: String
})
const userSchema = mongoose.Schema({
    userID: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_no: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: addressSchema,
        required: true
    }
})

const User = mongoose.model('users', userSchema);

export default User