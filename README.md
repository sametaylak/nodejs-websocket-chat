# NodeJS WebSocket Chat

NodeJS destekli WebSocket Chat Uygulaması

WebSocket modülünü projemize dahil ediyoruz. Ardından sabit olarak portumuzu 3000 olarak atıyoruz.
```sh
var webSocketServer = require('ws').Server;

var webSocket = new webSocketServer({
    port: 3000
});
```

on methodu ile sunucumuzu gelen bağlantıları ayrıştırıyoruz.
```sh
webSocket.on('connection', function (socket) {
   console.log('Biri bağlandı...');
});
```

Bağlantının ardından eğer sunucu bir mesaj yakalarsa bunu konsol ekranında yazdırıyor ve sunucuyu dinleyen tüm istemcilere yolluyor.
```sh
socket.on('message', function (msg) {
      console.log('Gelen mesaj: %s', msg); 
      socket.send(msg);
});
```

Terminal ekranından projenin klasörüne gidip
```sh
node server.js
```
komutu ile projeyi çalıştırabilirsiniz.
