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

  // Search for an element in the stack
  search(target: T): boolean {
    const tempStack: T[] = [];
    let found = false;

    // Iterate through the stack
    while (!this.isEmpty()) {
      const currentElement = this.pop()!;
      tempStack.push(currentElement); // Store popped elements in a temporary stack

      if (currentElement === target) {
        found = true; // Element found
        break;
      }
    }

    // Restore original stack from temporary stack
    while (tempStack.length > 0) {
      this.push(tempStack.pop()!);
    }

    return found; // Return whether the target was found
  }

  // Quick Sort function to sort the stack
  quickSort(): void {
    if (this.size() <= 1) return; // Base case: already sorted

    const pivot = this.pop()!; // Choose a pivot element
    const leftStack = new Stack<T>();
    const rightStack = new Stack<T>();

    // Partitioning elements into left and right stacks
    while (!this.isEmpty()) {
      const currentElement = this.pop()!;
      if (currentElement < pivot) {
        leftStack.push(currentElement); // Elements less than pivot go to left stack
      } else {
        rightStack.push(currentElement); // Elements greater than or equal to pivot go to right stack
      }
    }

    // Recursively sort the left and right stacks
    leftStack.quickSort();
    rightStack.quickSort();

    // Push back elements in sorted order: left stack, pivot, right stack
    while (!leftStack.isEmpty()) {
      this.push(leftStack.pop()!);
    }

    this.push(pivot); // Push pivot back

    while (!rightStack.isEmpty()) {
      this.push(rightStack.pop()!);
    }
  }
}
