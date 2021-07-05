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
        const firstBlock = Block.mineBlock(Block.genesis(), '$500');
        expect(block).not.toBeFalsy();
    });

    it('should set data to match the input', ()=> {
        expect(block.data).toEqual(data);
    });


    it('should set lastHash to match the hash of the last Block', ()=> {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });

})