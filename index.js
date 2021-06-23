import express from 'express';
import Movies from './routes/movies.js'
import Users from './routes/users.js'
import { initDB } from './models/db.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express()

app.use(express.json({ limit: "50mb", extended: true }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))

app.use('/movies', Movies);
app.use('/users', Users);

app.get("*", (req, res) => {
    res.send("404! Page not found")
})

const port = process.env.PORT || 3000
async function run() {
    await initDB();
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}

run();
