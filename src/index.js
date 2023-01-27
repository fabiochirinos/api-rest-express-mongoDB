const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./database/db')
const v1UserRoutes = require('./v1/routes/userRoutes')

// Seteamos las variables de entorno
dotenv.config({ path: '.env' })

const app = express()

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000

// MongoDB Atlas conexion
connectDB()


app.use('/api/v1/users', v1UserRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
})