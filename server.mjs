import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express()
app.use(cors)
const port = process.env.PORT || 5001;

app.get('/weather', (req, res) => {

    console.log(`${req.ip} is asking for weather`)

    res.send({
        city: "karachi",
        temp: 26,
        humidity: 72,
        temp_max: 31,
        temp_min: 19
    })
})

const __dirname = path.resolve();
app.get('/', express.static(path.join(__dirname, "/web/index.html")));
app.use('/', express.static(path.join(__dirname, "/web")));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})