import express, { Request, Response } from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middleware/logger.middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// enable all CORS requests
app.use(cors());

// parse JSON bodies
app.use(express.json());

// parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// security middleware
app.use(helmet());

// development logger
if (process.env.NODE_ENV === 'development') {
  app.use(logger);
  console.log(process.env.GREETING + ' in dev mode');
}

// root route
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to the Music API!</h1>');
});

// routers
app.use('/', [albumsRouter, artistsRouter]);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});