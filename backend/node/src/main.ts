import express from 'express';
import {Request, Response} from 'express';
const app = express();

app.use((req:Request, res:Response, next)=>{
    setTimeout(() => {
        res.header('Cache-Control', 'public, max-age=180')
        next()
    }, 2000)
})

app.use(express.static("public"));

app.listen(8000, async () => {
    console.log('node server is listening at port 8000');
});