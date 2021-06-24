import { Router } from "express";
import User from "../models/userSchema.js";
import ID from "../models/idSchema.js"
const router = Router()

//@METHOD GET
//@desc get all movies from database
//@visibility public
router.get('/', (req, res) => {

    User.find({}, { _id: false, __v: false }, (error, result) => {
        if (error) return res.status(500).json({ "message": error });
        if (result.length === 0) {
            return res.status(404).json({ "message": "Items not found" })
        }
        res.status(200).json(result);
    })
})


//@METHOD GET
//@desc single movie with given id
//@visibility public
router.get('/:id', (req, res) => {
    const id = req.params.id
    User.findOne({ userID: id }, { _id: false, __v: false }, (error, docs) => {
        if (docs == null) {
            return res.status(404).json({ "message": "Items not found" })
        }
        else
            res.status(200).json(docs);
    })
})

//@METHOD POST
//@desc add movies to database for public
//@visibility public
router.post('/', async (req, res) => {
    const { name, username, email, phone_no, address: {
        city,
        state,
        country,
        pinCode
    } } = req.body
    try {

        const newID = await changeID(0, "users");
        let len = newID + 1;

        const newUser = new User({
            userID: len, name, username, email, phone_no, address: {
                city, state, country, pinCode
            }
        })

        newUser.save(async (err, docs) => {
            if (err) {
                return res.status(201).json({ "message": err.message })
            }
            await changeID(1, "users");
            const { userID, name, username, email, phone_no, address } = docs
            return res.status(201).json({
                "useID": userID,
                "name": name,
                "username": username,
                "email": email,
                "phone_no": phone_no,
                "address": address
            })
        })
    } catch (err) {
        return res.status(500).json({ "message": err.message })
    }
})


export default router