var webSocketServer = require('ws').Server;

var webSocket = new webSocketServer({
    port: 3000
});

webSocket.on('connection', function (socket) {
   console.log('Biri bağlandı...');
   
   socket.on('message', function (msg) {
      console.log('Gelen mesaj: %s', msg); 
      socket.send(msg);
   });
});

console.log('İstek bekleniyor...');
