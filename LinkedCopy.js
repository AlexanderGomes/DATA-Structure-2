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

  push(element) {
    const node = new Node(element);

    if (this.head == null) this.head = node;
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.size) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element, index) {
    const node = new Node(element);
    if (index >= 0 && index <= this.size) {
      //add first
      if (index === 0) {
        node.next = this.head;
        this.head = node;

        //add rest
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

  remove(index) {
    if (index >= 0 && index < this.size) {
      let current = this.head;
      //remove first
      if (index === 0) {
        this.head = this.head.next;

        //remove rest
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
    }
    this.size--
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

list.insert(100, 3);
// list.remove(3)

console.log(list.getElementAt(0));
