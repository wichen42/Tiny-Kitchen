import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './config/keys.js';
import { orders } from './routes/orders.js';

const app = express();

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));

app.use(express.json());

app.use("/api/orders", orders);

const port = process.env.PORT || 5001;
const callback = () => console.log(`Server is running on port: ${port}`);
app.listen(port, callback);


