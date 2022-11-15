class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(element) {
    const node = new Node(element);

    let current = this.head;

    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
    node.prev = current;
    this.size++;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.size) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.size) {
      const node = new Node(element);
      let current = this.head;

      //add first
      if (index === 0) {
        node.next = this.head;
        current.prev = node;
        this.head = node;

        // add last
      } else if (index === this.size) {
        let current = this.tail;
        current.next = node;
        node.prev = current;

        //add any
      } else {
        const previous = this.getElementAt(index - 1);
        let current = previous.next;

        node.next = current;
        node.prev = previous;

        previous.next = node;
        current.prev = node;
      }
      this.size++;
    }
  }

  removeAt(index) {
    if (index >= 0 && index <= this.size) {
      if (index === 0) {
        this.head = this.head.next;
        this.head.prev = null;
      }

      // Remove tail
      if (index === this.length - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }


      if(index > 0 && index <= this.size) {
        let previous = this.getElementAt(index - 1)
        let current = previous.next

        previous.next = current.next
      }


      this.count--;    

    }
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.insert(10, 0);


console.log(list.getElementAt(2));
