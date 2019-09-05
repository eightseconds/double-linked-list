class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
    if (this.head === null) {
        this.head = node;
        this.tail = node;
        return;
    }

    this.insertBefore(this.head, node);
}

  setTail(node) {
    // Write your code here.
    if (this.tail === null) {
        this.setHead(node);
        return;
    }

    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
    node.next = nodeToInsert;
    nodeToInsert.prev = node;
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Write your code here.
    node = this.head;
    while (node !== null && node.value !== value) {
        node = node.next;
    }

    return true;
  }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;