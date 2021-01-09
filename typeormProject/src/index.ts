import 'reflect-metadata';
import express = require('express');
import morgan = require ('morgan');
import { createConnection } from 'typeorm' 
import userRoutes from './routes/user';
import tweetRoute from './routes/tweets';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(userRoutes);
app.use(tweetRoute);

//Databsae connection
createConnection().then(async connection => { 
   console.log("TypeORM with MongoDB"); 
 }).catch(error => console.log(error));

 //Server connection
app.listen(3000);
console.log('Server ready on port: ', 3000);