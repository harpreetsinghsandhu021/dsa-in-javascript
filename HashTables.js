class hashTables {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;

    hash = hash + ((key.charCodeAt() * 23) % this.dataMap.length);
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    console.log(index);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);
    return this;
  }
}

const myHash = new hashTables();
myHash.set("name", "Harpreet");
console.log(myHash);
