import 'reflect-metadata';
import express = require('express');
import morgan = require ('morgan');
import { config } from 'dotenv';
import userRoutes from './routes/user';
import tweetRoute from './routes/tweets';

const app = express();
config();
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(userRoutes);
app.use(tweetRoute);

export default app;