const WebSocket = require('ws');
const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.split(',') : [];

class P2PServer{
    constructor(blockChainInstance){
        this.blockChainInstance = blockChainInstance;
        this.socket = [];
    }
}

function listen(){
    const server = new WebSocket.Server({ port: P2P_PORT });
    server.on('connection', socket => this.connectSocket(socket));
    this.connectToPeers();
};

function connectToPeers(){
    peers.forEach(peer => {});
    const socket = new WebSocket(peer);
    socket.on('open', () => this.connectSocket(socket));
};

function connectSocket(socket){
    this.socket.push(socket);
    console.log('Socket connected!');

}

module.exports = P2PServer;