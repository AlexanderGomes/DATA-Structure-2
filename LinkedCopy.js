// singly linked list

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //add to the last index
  //if list is empty set head to be equal the element you're trying to add
  // otherwise loop through the array until you find a null value

  addLast(element) {
    const node = new Node(element);
    let current = this.head;

    if (this.head == null) this.head = node;
    else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      // {1}
      let node = this.head; // {2}
      for (let i = 0; i < index && node != null; i++) {
        // {3}
        node = node.next;
      }
      return node; // {4}
    }
    return undefined; // {5}
  }

  //add element to the given index
  addAny(element, index) {
    let node = new Node(element);
    if (index >= 0 && index < this.size) {
      // first
      if (index === 0) {
        let current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.size++;
      return true;
    }
    return false;
  }
}
