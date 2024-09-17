export class Queue<T> {
    private items: T[] = [];    // array of items

    // Push an item onto the queue
    public push(item: T): void {
        this.items.push(item);
    }

    // Pop an item off the queue
    public pop(): T | undefined {
        return this.items.shift();
    }

    // Peek at the top item without removing it
    public peek(): T | undefined {
        return this.items[0];
    }

    // Check if the queue is empty
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the queue
    public size(): number {
        return this.items.length;
    }
}