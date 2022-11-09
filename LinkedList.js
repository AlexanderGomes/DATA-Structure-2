function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element); // {1}
    let current; // {2}
    if (this.head == null) {
      // {3}
      this.head = node;
    } else {
      current = this.head; // {4}
      while (current.next != null) {
        // {5} get last item
        current = current.next;
      }
      // and assign next to new element to make the link
      current.next = node; // {6}
    }
    this.count++; // {7}
  }

  removeAt(index) {
    // check for out-of-bounds values
    if (index >= 0 && index < this.count) {
      // {1}
      let current = this.head; // {2}
      //removing first item
      if (index === 0) {
        // {3}
        this.head = current.next;
      } else {
        let previous; // {4}
        for (let i = 0; i < index; i++) {
          // {5}
          previous = current; // {6}
          current = current.next; // {7}
        }
        // link previous with current's next: skip it to remove
        previous.next = current.next; // {8}
      }
      this.count--; // {9}
      return current.element;
    }
    return undefined; // {10}
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

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      // {1}
      const node = new Node(element);
      if (index === 0) {
        // add on first position
        const current = this.head;
        node.next = current; // {2}
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1); // {3}
        const current = previous.next; // {4}
        previous.next = node; // {5}
        node.next = current; // {6}
      }
      this.count++; // update size of list
      return true;
    }
    return false; // {7}
  }

  indexOf(element) {
    let current = this.head; // {1}
    for (let i = 0; i < this.count && current != null; i++) {
      // {2}

      if (this.equalsFn(element, current.element)) {
        // {3}
        return i; // {4}
      }

      current = current.next; // {5}
    }

    return -1; // {6}
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      // {1}
      return "";
    }
    let objString = `${this.head.element}`; // {2}
    let current = this.head.next; // {3}
    for (let i = 1; i < this.size() && current != null; i++) {
      // {4}
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString; // {5}
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.insert(3, 1)
list.insert(5, 2)

console.log(list.getElementAt(0))
