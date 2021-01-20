import app from './app'
import { createConnection } from 'typeorm' 

//Databsae connection
createConnection().then(async connection => { 
   console.log("TypeORM with MongoDB"); 
 }).catch(error => console.log(error));

 //Server connection
app.listen(3000);
console.log('Server ready on port: ', 3000);

