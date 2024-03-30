import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.Mongo)
.then(() => {
    console.log( "MongoDB Connected successfully" );
})
.catch(err => {
    console.log(err);
});
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});