import { useEffect, useState } from 'react'

import './App.css'

function App() {
 
  const [socket ,setSocket] = useState<null | WebSocket>(null) ;
  const [latestmessage ,setLatestMessages] = useState("") ;
  const [meesge ,setmmessage] = useState("") ;

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      setSocket(newSocket);
      newSocket.send('Hello Server!');
    }
    // when ever we recieve messege we set the messge and show it on 
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setLatestMessages(message.data) ;
    }
   
     return () => newSocket.close();
  } ,[])

  if(!socket){
    return <div>
      loading
    </div>
  }

  return (
    <div>
      <input type="text" name="" id="" onChange={(e) => setmmessage(e.target.value)}/>
      <button onClick={() => {
        socket.send(meesge)
      }}>click</button>
{latestmessage}
    </div>
  )
}

export default App
