export class ListNode<T> {
    public value: T;
    public next: ListNode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
    }
  }
  
  export class LinkedList<T> {
    private head: ListNode<T> | null = null;
  
    // Append a node to the end of the list
    public append(value: T): void {
      const newNode = new ListNode(value);
  
      if (this.head === null) {
        this.head = newNode;
        return;
      }
  
      let current: ListNode<T> = this.head;
      while (current.next !== null) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Prepend a node to the start of the list
    public prepend(value: T): void {
      const newNode = new ListNode(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Remove a node by value
    public remove(value: T): void {
      if (this.head === null) return;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current: ListNode<T> = this.head;
      while (current.next !== null && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next !== null) {
        current.next = current.next.next;
      }
    }
  
    // Find a node by value
    public find(value: T): ListNode<T> | null {
      let current = this.head;
      while (current !== null && current.value !== value) {
        current = current.next;
      }
      return current;
    }
  
    // Convert the list to an array
    public toArray(): T[] {
      const elements: T[] = [];
      let current = this.head;
  
      while (current !== null) {
        elements.push(current.value);
        current = current.next;
      }
  
      return elements;
    }
  }