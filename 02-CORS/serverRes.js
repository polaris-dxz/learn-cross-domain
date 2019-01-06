var express = require('express');
var app = express();

var responsePort = 6001;  // 响应请求的页面跑在6001端口

// 可以改变‘/’为其他的路径，改完之后serverReq.js里面的请求路径也需要改变
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:6000'); // 设置允许跨域的origin，允许6000端口访问本端口（6001）
    res.send("Hello world from CROS.😡");   // 空格部分为表情，可能在编辑器不会显示
});

app.listen(responsePort, function () {
    console.log('cros_responser is listening on port '+ responsePort);
});
