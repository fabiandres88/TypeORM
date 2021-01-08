import 'reflect-metadata';
import express = require('express');
import morgan = require ('morgan');
import userRoutes from './routes/user';
import { createConnection } from 'typeorm' 

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(userRoutes);

//Databsae connection
createConnection().then(async connection => { 
   console.log("TypeORM with MongoDB"); 
 }).catch(error => console.log(error));

 //Server connection
app.listen(3000);
console.log('Server ready on port: ', 3000);