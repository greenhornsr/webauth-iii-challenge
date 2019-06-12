const server = require('./api/server');

const port = process.env.PORT || 3000;

server.listen(port, () =>{
    console.log(`\n\nServer is listening on http://localhost:${port}\n\n`);
})