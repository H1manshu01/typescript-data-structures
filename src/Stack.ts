export class Stack<T> {
  private items: T[] = [];

  // Push an item onto the stack
  public push(item: T): void {
    this.items.push(item);
  }

  // Pop an item off the stack
  public pop(): T | undefined {
    return this.items.pop();
  }

  // Peek at the top item without removing it
  public peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the stack
  public size(): number {
    return this.items.length;
  }
}
