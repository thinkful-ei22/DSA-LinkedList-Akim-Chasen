class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head) {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
      return;
    }
    this.insertFirst(item);
  }

  insertBefore(item, key) {
    if (this.head) {
      let tempNode = this.head;
      if (this.head.value === key) {
        this.insertFirst(item);
        return;
      }
      while (tempNode.next.value !== null && tempNode.next.value !== key) {
        tempNode = tempNode.next;
      }
      if (tempNode.next === null) {
        return null;
      }
      tempNode.next = new _Node(item, tempNode.next);
      return;
    }
    return null;
  }

  insertAfter(item, key) {
    if (this.head) {
      let tempNode = this.head;
      if (this.head.value === key) {
        this.head.next = new _Node(item, this.head.next);
        return;
      }
      while (tempNode.next !== null && tempNode.next.value !== key) {
        tempNode = tempNode.next;
      }
      if (tempNode.next === null) {
        return null;
      }
      tempNode = tempNode.next;
      tempNode.next = new _Node(item, tempNode.next);
      return;
    }
    return null;
  }

  insertAt(item, position) {
    if (this.head) {
      let tempNode = this.head;
      if (position === 0) {
        this.insertFirst(item);
        return;
      }
      for (let i = 0; tempNode.next !== null && i < position; i++) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, tempNode.next);
      return;
    }
    this.insertFirst(item);
  }

  find(item) {
    if (this.head) {
      let tempNode = this.head;
      while (tempNode.value !== item) {
        if (tempNode.next === null) {
          tempNode === null;
          return tempNode;
        }
        tempNode = tempNode.next;
      }
      return tempNode.value;
    }
    return null;
  }

  remove(item) {
    if (this.head) {
      let tempNode = this.head;
      if (this.head.value === item) {
        this.head = this.head.next;
      }
      while (tempNode.next !== null && tempNode.next.value !== item) {
        tempNode = tempNode.next;
      }
      if (tempNode.next === null) {
        return;
      }
      tempNode.next = tempNode.next.next;
    }
  }
}

function display(linkedList) {
  let tempNode = linkedList.head;
  while (tempNode !== null) {
    console.log(tempNode.value);
    tempNode = tempNode.next;
  }
}

function size(linkedList) {
  let tempNode = linkedList.head;
  let counter = 0;
  while (tempNode !== null) {
    counter++;
    tempNode = tempNode.next;
  }
  return counter;
}

function isEmpty(linkedList) {
  return linkedList.head ? true : false;
}

function findPrevious(linkedList, item) {
  if (linkedList.head) {
    let tempNode = linkedList.head;
    while (tempNode.next !== null && tempNode.next.value !== item) {
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      return null;
    }
    return tempNode.value;
  }
  return null;
}

function findLast(linkedList) {
  if (linkedList.head) {
    let tempNode = linkedList.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    return tempNode.value;
  }
  return null;
}

const myData = new LinkedList();

function main() {
  myData.insertLast("apples");
  myData.insertLast("bread");
  myData.insertLast("cookies");
  myData.insertLast("drugs");
  myData.insertAt("apricots", 0);
  debugger;
  display(myData);
  console.log(size(myData));
  console.log(isEmpty(myData));
  console.log(findPrevious(myData, "drugs"));
  console.log(findLast(myData));
}

main();

// | oranges- next(215)      |   apples - next(210)        |   pears        |    'bread'-next(206)         |
//     200                       206                             210              215
