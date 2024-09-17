import { Queue } from '../src/Queue'; // Import the class

describe('Queue', () => {

    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>(); // Create a new instance before each test
    });

    it('should push an item to the queue', () => {
        queue.push(1);
        expect(queue.size()).toBe(1);   // Check if size increases
        expect(queue.peek()).toBe(1);   // Ensure item is at the front of the queue
    });

    it('should pop an item from the queue', () => {
        queue.push(1);
        queue.push(2);
        const poppedItem = queue.pop();
        expect(poppedItem).toBe(1);     // Check if the popped item is correct (FIFO)
        expect(queue.size()).toBe(1);   // Check if size decreases
        expect(queue.peek()).toBe(2);   // Check if the next item is at the front
    });

    it('should return undefined when popping from an empty queue', () => {
        const poppedItem = queue.pop();
        expect(poppedItem).toBeUndefined();  // No items to pop, expect undefined
        expect(queue.size()).toBe(0);        // Ensure the size remains 0
    });

    it('should peek at the top item without removing it', () => {
        queue.push(1);
        queue.push(2);
        const peekedItem = queue.peek();
        expect(peekedItem).toBe(1);     // Check if the peeked item is correct
        expect(queue.size()).toBe(2);   // Ensure size remains unchanged after peeking
    });

    it('should return undefined when peeking at an empty queue', () => {
        const peekedItem = queue.peek();
        expect(peekedItem).toBeUndefined();  // No items to peek, expect undefined
    });

    it('should check if the queue is empty', () => {
        expect(queue.isEmpty()).toBe(true);  // Queue should be empty initially
        queue.push(1);
        expect(queue.isEmpty()).toBe(false); // After pushing, the queue should not be empty
    });

    it('should return the correct size of the queue', () => {
        expect(queue.size()).toBe(0);        // Initial size should be 0
        queue.push(1);
        expect(queue.size()).toBe(1);        // Size should increase after pushing
        queue.push(2);
        expect(queue.size()).toBe(2);        // Size should further increase
        queue.pop();
        expect(queue.size()).toBe(1);        // Size should decrease after popping
    });

    it('should handle pushing and popping multiple items correctly', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);

        expect(queue.pop()).toBe(1);         // Check if popping follows FIFO order
        expect(queue.pop()).toBe(2);
        expect(queue.pop()).toBe(3);
        expect(queue.size()).toBe(0);        // Queue should be empty after all pops
    });

});