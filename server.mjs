import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express()
app.use(cors)
const port = process.env.PORT || 5001;

app.get('/weather', (req, res) => {

    console.log(`${req.ip} is asking for weather`)

    res.send({
        "city": "London",
        "temp": 10,
        "weather": [
            {
                "main": "Clouds",
                "description": "few clouds"
            }
        ],
        "feels_like": 10,
        "temp_min": 10,
        "temp_max": 10,
        "pressure": 10,
        "humidity": 10,
        "visibility": 10,
        "windspeed": 10,
        "winddeg": 10,
        "clouds": 10
    })
})

const __dirname = path.resolve();
app.get('/', express.static(path.join(__dirname, "/web/index.html")));
app.use('/', express.static(path.join(__dirname, "/web")));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
