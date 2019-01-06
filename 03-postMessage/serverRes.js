var express = require('express');
var app = express();

var responsePort = 6001;  // 请求页面跑在6001端口

app.use(express.static(__dirname + '/staticRes')); //6001端口的静态文件，即index.html

app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
