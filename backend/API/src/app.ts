import 'reflect-metadata';
import express, { json, request, response } from 'express'; 
import createConnection from'./database';
import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,  Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE,  OPTIONS, PUT"
    );
    next();
});
app.use(router);

export{ app };