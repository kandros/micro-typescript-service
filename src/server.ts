import micro from 'micro'
import {IncomingMessage, ServerResponse} from 'http'

function requestHandler(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200)
    res.end('ciaone!')
}

const PORT = process.env.PORT || 3000
micro(requestHandler).listen(PORT, () => console.log(`listening on port ${PORT}`)
