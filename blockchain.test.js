const BlockChain = require("./blockchain");
const Block = require("./block");

describe("BlockChain Test", () => {

  let bc;
  let bc_valid;
  let lastBlock;

  beforeEach(() => {
    bc = new BlockChain();
    blockChainValid = new BlockChain();
    lastBlock = Block.genesis();
  });

  it("should start with genesis block", () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it("should adds a new block", () => {
    const data = "index.html";
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });

  it('should validate a chain', () => {
    blockChainValid.addBlock('$1000');
    expect(bc.isValidChain(blockChainValid.chain)).toBe(true);
  });

  it('should invalidate a chain with a genesis block corrupted', () => {
    blockChainValid.chain[0] = "0U$";
    blockChainValid.addBlock('00000');
    expect(bc.isValidChain(blockChainValid.chain)).toBe(false);
  });

});