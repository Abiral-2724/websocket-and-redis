import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

// write http sever natively 

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

// creating websocker server instaance 
const wss = new WebSocketServer({ server });

let userconnect : number = 0 ;
wss.on('connection', function connection(ws) {
    // if the error comes do this 
  ws.on('error', console.error);

  // if the message comes do this 
  // whenever  their is a message 
  ws.on('message', function message(data, isBinary) {
    // broad cast this to every client
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  console.log('user connected = ', ++userconnect) ;
  ws.send ('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});