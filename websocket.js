var url = "ws://localhost:3000";

var socket = new WebSocket(url);

var ol = document.getElementById("chat");

socket.onopen = function () {
    /*
      Sunucu ile başarılı bir şekilde bağlantı kurulduğunda çalışacak olan fonksiyon
    */
    console.log("WebSocket açıldı");   
};

socket.onmessage = function (response) {
    /*
      Sunucudan mesaj geldiğinde çalışacak olan fonksiyon
    */
    var li = document.createElement('li');
    li.setAttribute("class", "msg");
    li.innerText = response.data;
    ol.appendChild(li);
};

socket.onclose = function () {
    /*
      Sunucudan ile başarılı bir şekilde bağlantı kurulamadığında çalışacak olan fonksiyon
    */
    console.log("WebSocket kapalı");
};

function sendMsg(e, obj) {
    if (e.keyCode == 13) {
        var msg = obj.value;
        socket.send(msg);
        obj.value = "";
        return false;
    }
}