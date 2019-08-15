import "dotenv/config"
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/data', routes.formData)

app.get('/*', (req, res) => {
    res.status(404).send('Route not found')
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is now running on port ${process.env.PORT}`)
})