import { Node } from "./Node";
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  getSize() {
    return this.size;
  }
  append(value) {
    let g = new Node(value);
    this.appendNode(g);
    this.size = this.size + 1;
  }
  appendWithKey(Key, value) {
    let g = new Node(value);
    g.setKey(Key);
    this.appendNode(g);
    this.size = this.size + 1;
  }
  appendNode(Node) {
    if (this.head !== null) {
      this.tail.setNextNode(Node);
      this.tail = Node;
    } else {
      this.head = Node;
      this.tail = Node;
    }
  }
  prepend(value) {
    let g = new Node(value);
    this.prependNode(g);
    this.size = this.size + 1;
  }
  prependNode(Node) {
    if (this.head !== null) {
      Node.setNextNode(this.head);
      this.head = Node;
    } else {
      this.head = Node;
      this.tail = Node;
    }
  }
  head() {
    return this.head;
  }
  tail() {
    return this.tail;
  }
  at(index) {
    if (index > this.size) {
      return "Error";
    } else if (index == this.size) {
      return this.tail.getvalue();
    } else {
      let node = this.head;
      for (let x = 0; x <= index; x++) {
        if (x == index) {
          return node.getvalue();
        }
        node = node.getNextNode();
      }
    }
  }
  atWithKey(index) {
    if (index > this.size) {
      return "Error";
    } else if (index == this.size) {
      return this.tail;
    } else {
      let node = this.head;
      for (let x = 0; x <= index; x++) {
        if (x == index) {
          return node;
        }
        node = node.getNextNode();
      }
    }
  }
  pop() {
    if (this.size > 2) {
      let node1 = this.head;

      for (let x = 0; x <= this.size; x++) {
        if (x == this.size - 2) {
          node1.setNextNode(null);
          this.tail = node1;
          this.size = this.size - 1;
          break;
        }
        node1 = node1.getNextNode();
      }
    }
  }

  contains(value) {
    let node = this.head;
    for (let x = 0; x < this.size; x++) {
      if (node.getvalue() == value) {
        return true;
      }
      node = node.getNextNode();
    }
    return false;
  }

  find(value) {
    let node = this.head;
    for (let x = 0; x < this.size; x++) {
      if (node.getvalue() == value) {
        return x;
      }
      node = node.getNextNode();
    }
    return null;
  }
  findWithKey(value) {
    let node = this.head;

    for (let x = 0; x < this.size; x++) {
      if (node.getKey() == value) {
        return node;
      }
      node = node.getNextNode();
    }
    return null;
  }
  findWithKeyIndex(value) {
    let node = this.head;

    for (let x = 0; x < this.size; x++) {
      if (node.getKey() == value) {
        return x;
      }
      node = node.getNextNode();
    }
    return null;
  }
  toString() {
    let str = "";
    let node = this.head;
    for (let x = 0; x < this.size; x++) {
      if (x == this.size - 1) {
        str = str + "( " + node.toString() + " )";
      } else {
        str = str + "( " + node.toString() + " ) -> ";
      }
      node = node.getNextNode();
    }
    return str;
  }

  insertAt(value, index) {
    let node = this.head;
    for (let x = 0; x < this.size; x++) {
      if (x == index) {
        let newNode = new Node(value);
        newNode.setNextNode(node.getNextNode());
        node.setNextNode(newNode);
        this.size = this.size + 1;
        return true;
      }
    }
    return false;
  }
  removeAt(index) {
    if (index > this.size) {
      return "Error";
    } else {
      let node = this.head;
      if (index == 0) {
        if (this.size == 1) {
          this.head = this.head.getNextNode();
          this.tail = undefined;
          this.size = this.size - 1;
          return true;
        } else {
          this.head = this.head.getNextNode();
          this.size = this.size - 1;
          return true;
        }
      }
      for (let x = 0; x <= this.size; x++) {
        if (x == index - 1) {
          let p = node.getNextNode();
          let g = p.getNextNode();
          node.setNextNode(g);
          this.size = this.size - 1;
          return true;
        }
        node = node.getNextNode();
      }
    }
    return false;
  }
}

export { LinkedList };
