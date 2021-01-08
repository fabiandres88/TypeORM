import express = require('express');
import morgan = require ('morgan');
import userRoutes from './routes/user';   

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(userRoutes);

app.listen(3000);
console.log('Server ready on port: ', 3000);