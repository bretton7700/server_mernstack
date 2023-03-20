//model library for mongodb - helps us create models more easily
import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log(error))
}

export default connectDB;