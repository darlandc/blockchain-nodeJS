const BlockChain = require("./blockchain");
const Block = require("./block");

describe("BlockChain Test", () => {

  let firstBlockChain;
  let firstBlockChain_valid;
  let lastBlock;

  beforeEach(() => {
    firstBlockChain = new BlockChain();
    secondBlockChain = new BlockChain();
    lastBlock = Block.genesis();
  });

  it("should start with genesis block", () => {
    expect(firstBlockChain.chain[0]).toEqual(Block.genesis());
  });

  it("should adds a new block", () => {
    const data = "index.html";
    firstBlockChain.addBlock(data);
    expect(firstBlockChain.chain[firstBlockChain.chain.length - 1].data).toEqual(data);
  });

  it('should validate a chain', () => {
    secondBlockChain.addBlock('$1000');
    expect(firstBlockChain.isValidChain(secondBlockChain.chain)).toBe(true);
  });

  it('should invalidate a chain with a genesis block corrupted', () => {
    secondBlockChain.chain[0] = "0U$";
    secondBlockChain.addBlock('00000');
    expect(firstBlockChain.isValidChain(secondBlockChain.chain)).toBe(false);
  });

  it('invalidates a corrupt chain', ()=> {
    secondBlockChain.addBlock('200U$');
    secondBlockChain.chain[1].data = '0$';
    expect(firstBlockChain.isValidChain(secondBlockChain.chain)).toBe(false);
  })

});