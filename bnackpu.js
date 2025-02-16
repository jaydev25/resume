const express = require('express');
const next = require('next');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3001;

app.prepare().then(() => {
  const expressApp = express();
  
  // Enable CORS
  expressApp.use(cors());

  // API routes
  expressApp.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Handle all other routes with Next.js
  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  // Create HTTP server
  const server = createServer(expressApp);

  // Initialize WebSocket server
  const wss = new WebSocketServer({ server });

  function heartbeat() {
    this.isAlive = true;
  }

  // const interval = setInterval(() => {
  //   wss.clients.forEach((ws) => {
  //     if (ws.isAlive === false) {
  //       console.log('Client failed to respond to ping, terminating');
  //       return ws.terminate();
  //     }
      
  //     ws.isAlive = false;
  //     ws.ping();
  //   });
  // }, 30000);

  wss.on('close', () => {
    clearInterval(interval);
  });

  wss.on('connection', (ws, req) => {
    ws.isAlive = true;
    ws.on('pong', heartbeat);
    
    console.log(`New client connected from ${req.socket.remoteAddress}`);

    // Send initial connection success message
    ws.send(JSON.stringify({ 
      type: 'connection', 
      status: 'connected' 
    }));

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data);
        
        switch (message.type) {
          case 'ping':
            ws.send(JSON.stringify({ type: 'pong' }));
            break;
          case 'message':
            // Broadcast message to all clients
            wss.clients.forEach((client) => {
              if (client !== ws && client.readyState === 1) {
                client.send(JSON.stringify({
                  type: 'message',
                  data: message.data
                }));
              }
            });
            break;
        }
      } catch (error) {
        console.error('Error processing message:', error);
      }
    });

    ws.on('close', (code, reason) => {
      console.log(`Client disconnected. Code: ${code}, Reason: ${reason || 'No reason provided'}`);
    });
  });

  wss.on('error', (error) => {
    console.error('WebSocket server error:', error);
  });

  // Start server
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    console.log('> WebSocket server is running');
  });
});
