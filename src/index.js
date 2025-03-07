import express from 'express'
import morgan from 'morgan'
import { connectDB } from './db.js'

const app = express()

connectDB()

//Dependencias
app.use(morgan('dev'))
app.use(express.json())

//Rutas
app.use("/api", autRoutes);

app.listen(4000)
console.log('Servidor corriendo', 4000)