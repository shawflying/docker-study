const express = require("express");
const port = 5100;
var app = express();

app.get("/", function(req, res) {
    console.log("请求信息。。。。");
    res.send("Hello world!");
});

app.listen(port, function(err) {
    console.log(`http://127.0.0.1:${port}`);
})