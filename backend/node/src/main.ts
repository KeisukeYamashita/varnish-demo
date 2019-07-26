import express from 'express';
import {Request, Response} from 'express';
import path from 'path';
const app = express();

app.use((req, res, next)=>{
    setTimeout(() => {
        next()
    }, 2000)
})

app.use(express.static("public"));

app.listen(8000, async () => {
    console.log('node server is listening at port 8000');
});