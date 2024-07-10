class Node {
  constructor(data, nextNode) {
    this.data = data;
    this.nextNode = nextNode;
    this.key = -890;
  }
  toString() {
    return this.key + "  " + this.data;
  }
  setNextNode(Node) {
    this.nextNode = Node;
  }
  setKey(key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
  getNextNode() {
    return this.nextNode;
  }

  setValue(data) {
    this.data = data;
  }

  getvalue() {
    return this.data;
  }
}

export { Node };
