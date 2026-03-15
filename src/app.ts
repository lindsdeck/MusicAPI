import express, { Request, Response } from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express(); //Creates an express application instance
const port = 3000; //Port numbner that the server will listen to 

console.log(process.env.GREETING);       // ✅
console.log(process.env.PORT);           // ✅
console.log(process.env.MY_SQL_DB_HOST); // ✅
console.log(process.env.NODE_ENV);       // ✅


//handles the GET request to the root route and then sends a response back to the client with the message.
app.get('/', (req: Request, res: Response) => {  res.send('Hello, World from TypeScript!');
});
// logs when the server starts and is listening on the specified port
app.listen(port, ()=> {console.log(`Example app listening at http://localhost:${port}`)});
