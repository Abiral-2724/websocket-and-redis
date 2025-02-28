import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CreateComment = ({ snippet }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8001/api/v1/snippet/${snippet.id}/comment`, { text });
      console.log(res.data);
      setComments([...comments, res.data.comment]);
      setText(""); // Clear input after submission
    } catch (e) {
      console.log(e);
    }
  }

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:8001/api/v1/snippet/${snippetId}/comment`);
  //       console.log(res.data);
  //       setComments(res.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
    
  //   fetchComments(); // Execute the function
  // }, [snippetId]);

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <ul className="mb-4 space-y-2">
        {snippet.comments.map((comment, index) => (
          <li key={index} className="p-3 bg-white rounded border border-gray-200 shadow-sm">
            {comment.content}
          </li>
        ))}
      </ul>

      <form className="flex gap-2" onSubmit={addComment}>
        <input
          type="text"
          placeholder="Add comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Add comment
        </button>
      </form>
    </div>
  );
}

export default CreateComment;