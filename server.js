"use strict";
exports.__esModule = true;
var micro = require("micro");
function requestHandler(req, res) {
    res.writeHead(200);
    res.end('wootdawg');
}
micro(requestHandler).listen(process.env.PORT || 3000);
