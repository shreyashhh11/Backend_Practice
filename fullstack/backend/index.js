// require('dotenv').config()
import express from 'express'

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id:1,
            joke:"hjij"
        },
        {
            id:2,
            joke:"frsjf"
        },
        {
            id:3,
            joke:"fjsoj"
        }
    ];
    res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})