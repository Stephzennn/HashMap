import { LinkedList } from "./LinkedList";

class HashMap {
  constructor() {
    this.array = [];
    this.size = 0;
    this.KeyArray = [];
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  getArray() {
    return this.array;
  }
  set(key, value) {
    let keynumber = this.hash(key);

    if (this.array[keynumber] == undefined) {
      let g = new LinkedList();
      g.appendWithKey(key, value);
      this.size = this.size + 1;
      this.KeyArray.push(key);
      this.array[keynumber] = g;
    } else {
      let hg = this.array[keynumber].findWithKey(key);
      if (hg == null) {
        this.array[keynumber].appendWithKey(key, value);
        this.size = this.size + 1;
        this.KeyArray.push(key);
      } else {
        hg.setValue(value);
      }
    }
  }
  get(key) {
    let num = this.hash(key);
    let x = this.array[num];
    if (x == undefined) {
      return null;
    } else {
      let h = x.findWithKey(key);
      if (h != null) {
        return h.getvalue();
      } else {
        return null;
      }
    }
  }

  has(key) {
    let num = this.hash(key);
    let x = this.array[num];
    if (x == undefined) {
      return false;
    } else {
      let h = x.findWithKey(key);
      if (h != null) {
        return true;
      } else {
        return false;
      }
    }
  }

  remove(key) {
    if (this.has(key) == false) {
      return false;
    } else {
      let num = this.hash(key);
      let x = this.array[num];
      let index = x.findWithKeyIndex(key);

      if (index != null) {
        x.removeAt(index);
        this.size = this.size - 1;
        const foundElement = this.KeyArray.findIndex(
          (element) => element === key
        );
        this.KeyArray.splice(foundElement, 1);
        let k = this.array[num];

        if (k.getSize() == 0) {
          this.array[num] = undefined;
        }

        return true;
      }

      return false;
    }
  }
  length() {
    return this.size;
  }

  clear() {
    let hj = [];
    this.array = hj;
    this.size = 0;
  }

  keys() {
    return this.KeyArray;
  }

  values() {
    let g = [];
    for (let x = 0; x < this.KeyArray.length; x++) {
      g.push(this.get(this.KeyArray[x]));
    }
    return g;
  }

  entries() {
    let g = [];
    for (let x = 0; x < this.KeyArray.length; x++) {
      let h = [this.KeyArray[x], this.get(this.KeyArray[x])];
      g.push(h);
    }
    return g;
  }
}

export { HashMap };
