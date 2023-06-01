import express, { Application, Response, Request } from "express";
import 'dotenv/config'

const app: Application = express();
app.use(express.json());


app.get('/ola', (req: Request, res: Response): Response =>{

    return res.status(200).json('olá')

})

const runningMsg: string = `Server running on ${process.env.PORT}`;

app.listen(process.env.PORT, () => {runningMsg})
