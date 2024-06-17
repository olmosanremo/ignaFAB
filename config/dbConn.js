const mongoose = require('mongoose')


// um die deprecation warning zu unterbinden
mongoose.set('strictQuery', false)

const connectDB = async () => {
try{
    await mongoose.connect(process.env.DATABASE_URI)
} catch(err) {
    console.log(err)
}

}

module.exports = connectDB