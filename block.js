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


}

module.exports = Block;