const Block = require('./block');

class BlockChain {
    constructor(){
        this.chain = [Block.genesis()];
    }
}