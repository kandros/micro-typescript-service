import micro from 'micro'
import {IncomingMessage, ServerResponse} from 'http'

function requestHandler(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200)
    res.end('ciaone!')
}

micro(requestHandler).listen(process.env.PORT || 3000)