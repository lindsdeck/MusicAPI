import express, { Request, Response } from 'express';

const app = express(); //Creates an express application instance
const port = 3000; //Port numbner that the server will listen to 
//handles the GET request to the root route and then sends a response back to the client with the message.
app.get('/', (req: Request, res: Response) => {  res.send('Hello, World from TypeScript!');
});
// logs when the server starts and is listening on the specified port
app.listen(port, ()=> {console.log(`Example app listening at http://localhost:${port}`)});
