const express = require('express');
const BlockChain = require('../blockchain');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const P2P_SERVER = require('./p2p-server');

const app = express();
const bc = new BlockChain();
// const P2P_SERVER = new P2P_SERVER();

app.use(express.json());

app.get('/blocks', (req, res)=>{ 
    res.json(bc.chain);
});

app.post('/mine', (req, res)=> {
    const block = bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);
    res.redirect('/blocks');
})

app.listen(HTTP_PORT, ()=> console.log(`Listening on port ${HTTP_PORT}`));