import express from 'express';
import inventarioRouter from './routes/inventory'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('Hola moundo' )
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

app.use('/inventario', inventarioRouter)