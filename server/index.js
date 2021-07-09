import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();  //initialize express app


app.use(bodyParser.json({ limit: "30mb", extended: true })); //passing images ~30mb
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());    //need cors() above routes

app.use('/posts', postRoutes);  //every route from 'postRoutes' will start with '/posts'

// https://www.mongodb.com/cloud/atlas
// database setup
const CONNECTION_URL = 'mongodb+srv://justinling:BurlingameHighSchool@cluster0.rh2ld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);    //no warnings in console