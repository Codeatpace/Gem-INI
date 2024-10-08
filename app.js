import express from "express";
import bodyParser from "body-parser";
import Search from './routes/Search.js'

const app = express();

const port = 5000;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(bodyParser.json());
app.use('/api', Search);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})