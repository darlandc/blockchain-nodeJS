const Block = require('./block');

class BlockChain {
    constructor(){
        this.chain = [Block.genesis()];
    }

    addBlock(data){
        const lastBlock = this.chain[this.chain.length - 1];
        const block = Block.mineBlock(lastBlock, data);
        this.chain.push(block);

        return block;
    }
}