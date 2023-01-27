const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('mongoDB is connected!!')
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

module.exports = connectDB