const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(timesTamp, lastHash, hash, data) {
    this.timesTamp = timesTamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return `Block = 
                Timestamp = ${this.timesTamp} \n
                Lasthash = ${this.lastHash.substring(0 ,10)} \n
                Hash = ${this.hash.substring(0, 10)} \n
                Data = ${this.data}`;
  }

  static genesis() {
    return new this(new Date(), 'GENESIS', '398985ebdb4cf5857d7a30ce4f4e34b49f6b7d69d4179bbebc4848ae36abc337', [ null ]);
  }

  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timestamp, lastHash, data);

    return new this(timestamp, lastHash, hash, data);
  }

  static hash(timesTamp, lastHash, data){
    return SHA256(`${timesTamp}${lastHash}${data}`).toString();
  }

  static blockHash(block){
    const { timesTamp, lastHash, data } = block;
    return Block.hash(timesTamp, lastHash, data);
  }


}

module.exports = Block;