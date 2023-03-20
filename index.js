import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes';


dotenv.config();

//initialize our app
const app = express();

//pass middleware
app.use(cors());

app.use(express.json({ limit: '50mb'}));

app.get('/', (req, res) => {
    res.send({ message: 'Backend'});
});

app.use('/api/v1/users',userRouter);
app.use('/api/v1/properties',propertyRouter);

const startServer = async () => {
    try {
        //connecting to the database
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () => console.log('Server started on port http://localhost:8080'))
        
    } catch (error) {
        console.log(error);
        
    }
}

startServer();
