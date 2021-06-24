import { Router } from 'express'
import changeID from '../helpers/changeID.js';
import Quote from '../models/quoteSchema.js';

const router = Router();


//@METHOD GET
//@desc get all movies from database
//@visibility public
router.get('/', (req, res) => {

    Quote.find({}, { _id: false, __v: false }, (error, result) => {
        if (error) return res.status(500).json({ "message": error });
        if (result.length === 0) {
            return res.status(404).json({ "message": "No Quotes Available" })
        }
        res.status(200).json(result);
    })
})


//@METHOD GET
//@desc single movie with given id
//@visibility public
router.get('/:id', (req, res) => {
    const id = req.params.id
    Quote.findOne({ quoteID: id }, { _id: false, __v: false }, (error, docs) => {
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
    const { author, quote } = req.body
    try {

        const newID = await changeID(0, "quotes");
        let len = newID + 1;

        const newMovie = new Quote({ quoteID: len, author, quote })

        newMovie.save(async (err, docs) => {
            if (err) {
                return res.status(201).json({ "message": err.message })
            }
            await changeID(1, "quotes");
            const { quoteID, author, quote } = docs
            return res.status(201).json({
                "quoteID": quoteID,
                "author": author,
                "quote": quote
            })
        })
    } catch (err) {
        return res.json({ "message": err.message })
    }
})

export default router