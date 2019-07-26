import express from 'express';
import {Request, Response} from 'express';
import path from 'path';
const app = express();


app.get('/endpoint', (req:Request, res:Response)=>{
    res.sendFile(path.resolve(__dirname + '/../public/index.html'))
})

app.get('/lazy-endpoint', (req:Request, res:Response)=>{
    setTimeout(() => {
        res.sendFile(path.resolve(__dirname + '/../public/index.html'))
    }, 1000);
})

app.listen(8000, async () => {
    console.log('node server is listening at port 8000');
});