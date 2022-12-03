import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express()
const cors = cors()
const port = process.env.PORT || 5005;

app.use(cors());

app.get('/weather', (req, res) => {
    console.log("request ip: ", req.ip);

    res.send({
        temp: 30,
        min: 26,
        max: 31,
        humidity: 72,
        serverTime: new Date().toString()
    });
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
