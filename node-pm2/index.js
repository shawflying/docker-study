const express = require("express");
var app = express();
const port = 5110;
app.get("/", function(req, res) {
    res.send("Hello node pm2!");
});

app.listen(port, function() {
    console.log(`http://127.0.0.1:${port}`);
})