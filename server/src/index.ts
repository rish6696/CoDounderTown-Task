import express, { Request, Response, urlencoded, NextFunction } from "express";
import { router } from "./routes/index";
import { PORT } from "./config";
import { dbConnect } from "./services/databaseService";
import { APIError } from "./utilities/APIError";
import { NOT_FOUND } from "./utilities/errorConstants";
import { errorHandler } from "./middlewares/errorMiddleware";
import CookieParser from 'cookie-parser'
import logger from "./utilities/logger";
import cors from 'cors' 

const app = express();


app.use(cors({credentials: true, origin: 'http://13.233.92.17:3000/'}));


app.use(CookieParser())

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new APIError(404, NOT_FOUND));
});

app.use(errorHandler);
 

app.listen(PORT, (): void => {
  logger.info(`server started on the port ${PORT}`)
  dbConnect().then(x=>console.log(`Database connected successfully`))
});

