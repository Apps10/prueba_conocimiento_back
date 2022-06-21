import express from 'express';
import router from './Router/router';
import morgan from "morgan";
import cors from "cors";
import { config } from "./config";

const app = express();

app.use(cors());
app.use(morgan(`${config.ENTORNO}` || "dev"));
app.use(express.json());
app.use('/api',router);


export default app;