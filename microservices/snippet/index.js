import express from 'express' ;
import cors from 'cors';
import snippetRouter from './routes/snippet.js'

const app = express();

const PORT = 8000;

app.use(express.json()); // Add this to parse JSON request bodies
app.use(cors()); // Enable CORS
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/snippet' ,snippetRouter) ;


app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})