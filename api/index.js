console.log("hola mundo mi primer backend")
console.log("hola de nuevo")
import express from "express"
import indexRouter from "./routes/aprendices.routes.js"
import cors from 'cors';

const app = express()

app.use(express.json());
app.use(cors('*'));
app.use(indexRouter);


app.listen(3000);
console.log(`aplicacion corriendo en el puerto ${3000}`)