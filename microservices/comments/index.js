import express from 'express' ;
import cors from 'cors';
import commentRouter from './routes/comment.js'

const app = express();

const PORT = 8001;

app.use(express.json()); // Add this to parse JSON request bodies
app.use(cors()); // Enable CORS
app.use(express.urlencoded({extended:true}))

app.post('/events' ,(req ,res) => {
    console.log('recieved types = ' ,req.body.type) ;

    return res.status(200).json({})
})



app.use('/api/v1/snippet' ,commentRouter) ;


app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})