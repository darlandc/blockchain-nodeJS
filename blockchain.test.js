const BlockChain = require("./blockchain");
const Block = require("./block");

describe("BlockChain Test", () => {
    
  let bc;

  beforeEach(() => {
    bc = new BlockChain();
  });

  it("should start with genesis block", () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it("should adds a new block", () => {
    const data = "index.html";
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });
});
    