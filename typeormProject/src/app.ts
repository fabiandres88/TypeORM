import 'reflect-metadata';
import express = require('express');
import morgan = require ('morgan');
import userRoutes from './routes/user';
import tweetRoute from './routes/tweets';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(userRoutes);
app.use(tweetRoute);

export default app;