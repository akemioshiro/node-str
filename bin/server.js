const app = require('../src/app');
const debug = require('debug')('balta:server');
const http = require('http');

// seta a porta
// process.env.PORT vem do azure
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// cria o servidor
const server = http.createServer(app);

// servidor fica escutando requisições
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('Executando na porta ' + port);


// normalizando a porta da aplicação
function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }

    if(port >= 0) {
        return port;
    }
    return false;
}

// tratativa de erros
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
    debug('Listening on ' + bind);
}