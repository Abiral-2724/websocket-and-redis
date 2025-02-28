import {randomBytes} from "crypto"
import { commentsDB } from "../database/index.js";
import axios from 'axios'


export const createComment = async (req ,res) => {
    const commentId = randomBytes(4).toString('hex') ;

    const {text} = req.body ; 

    const snippetId = req.params.id ;

    const comments = commentsDB[snippetId] || [] ;

    // create comment 
    comments.push({commentId ,text}) ;

    commentsDB[snippetId] = comments ;



    // event emit [ publish an event ]
    await axios.post("http://localhost:8005/events",{
        type : "Commentcreated" ,
        data : {
            id : commentId ,
            content : text,
            snippetId 
        }
    })



    return res.status(201).json({
        success:true ,
        message:"comment added" ,
        comment : {commentId ,text}
    })

}


export const getCommentBySnippetId = (req,res) => {
    const snippetId = req.params.id ;


    return res.status(200).json(commentsDB[snippetId] || [])
}