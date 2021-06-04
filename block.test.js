const Block = require('./block');

describe('Block Test', () => {

    let data, lastBlock, block;

    beforeEach(() => {
        data = 'index.html';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('should create a Block instance correctly', () => {
        const block = new Block('8787', '892UEOJ389UEWRAR9', '328U48EIROSRUOISUR', '100');
        console.log(block.toString());
        console.log(Block.genesis().toString());

        const firstBlock = Block.mineBlock(Block.genesis(), '$500');

        console.log(firstBlock.toString());

        expect(block).not.toBeFalsy();
    });
})