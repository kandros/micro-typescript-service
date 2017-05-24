"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var micro_1 = require("micro");
function requestHandler(req, res) {
    res.writeHead(200);
    res.end('ciaone!');
}
micro_1.default(requestHandler).listen(process.env.PORT || 3000);
//# sourceMappingURL=server.js.map