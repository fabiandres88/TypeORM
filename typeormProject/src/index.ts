import app from './app'
import { createConnection } from 'typeorm'

//Databsae connection
createConnection().then(async connection => {
  console.log("MongoDB connection with successful TypeORM");
}).catch(error => console.log(error));

//Server connection
app.listen(process.env.PORT);
console.log('Server ready on port: ', process.env.PORT);