const Block = require('./block');

describe('Block Test', () => {

    let data, lastBlock, block;

    beforeEach(() => {
        data = 'index.html';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('should create a Block instance correctly', () => {
        const block = new Block;
        console.log(block);
        expect(block).not.toBeFalsy();
    });
})