// import path from 'path';
import express from 'express';
import dotenv from 'dotenv'
import Movies from './routes/movies.js'
import Users from './routes/users.js'
import { initDB } from './models/db.js';

dotenv.config();
const app = express()

app.use(express.json({ limit: "50mb", extended: true }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))

app.use('/movies', Movies);
app.use('/users', Users);

const port = process.env.PORT || 3000
async function run() {
    await initDB();
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}

run();
