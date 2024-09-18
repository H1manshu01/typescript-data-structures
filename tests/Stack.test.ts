import { Stack } from '../src/Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('initializes an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test('pushes elements onto the stack', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
  });

  test('pops elements from the stack', () => {
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(popped).toBe(2);
    expect(stack.size()).toBe(1);
  });

  test('peeks at the top element without removing it', () => {
    stack.push(1);
    stack.push(2);
    const top = stack.peek();
    expect(top).toBe(2);
    expect(stack.size()).toBe(2);
  });

  test('returns undefined when popping from an empty stack', () => {
    const popped = stack.pop();
    expect(popped).toBeUndefined();
  });

  test('returns undefined when peeking into an empty stack', () => {
    const top = stack.peek();
    expect(top).toBeUndefined();
  });

  it('should find an element in the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    const target = 20;
    const isFound = stack.search(target);

    expect(isFound).toBe(true);
  });

  it('should not find an element not present in the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    const target = 40;
    const isFound = stack.search(target);

    expect(isFound).toBe(false);
  });

  it('should find the target element when it is at the bottom of the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    const target = 10;
    const isFound = stack.search(target);

    expect(isFound).toBe(true);
  });

  it('should find the target element when it is at the top of the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    const target = 30;
    const isFound = stack.search(target);

    expect(isFound).toBe(true);
  });

  it('should preserve the original stack after searching', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    const originalStackSize = stack.size();
    stack.search(20);

    expect(stack.size()).toBe(originalStackSize);
  });

  it('should return false for an empty stack', () => {
    const target = 10;
    const isFound = stack.search(target);

    expect(isFound).toBe(false);
  });

  it('should sort an unsorted stack', () => {
    stack.push(30);
    stack.push(10);
    stack.push(50);
    stack.push(20);
    stack.push(40);

    stack.quickSort();

    const sortedElements: any = [];
    while (!stack.isEmpty()) {
      sortedElements.push(stack.pop());
    }

    expect(sortedElements).toEqual([10, 20, 30, 40, 50]);
  });

  it('should handle an already sorted stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    stack.quickSort();

    const sortedElements: any = [];
    while (!stack.isEmpty()) {
      sortedElements.push(stack.pop());
    }

    expect(sortedElements).toEqual([10, 20, 30]);
  });

  it('should handle a reverse sorted stack', () => {
    stack.push(30);
    stack.push(20);
    stack.push(10);

    stack.quickSort();

    const sortedElements: any = [];
    while (!stack.isEmpty()) {
      sortedElements.push(stack.pop());
    }

    expect(sortedElements).toEqual([10, 20, 30]);
  });

  it('should handle a single element stack', () => {
    stack.push(42);

    stack.quickSort();

    const sortedElements: any = [];
    while (!stack.isEmpty()) {
      sortedElements.push(stack.pop());
    }

    expect(sortedElements).toEqual([42]);
  });

  it('should handle an empty stack', () => {
    // No elements to sort
    stack.quickSort();

    const sortedElements: any = [];
    while (!stack.isEmpty()) {
      sortedElements.push(stack.pop());
    }

    expect(sortedElements).toEqual([]);
  });

  it('should sort a stack with duplicate elements', () => {
    stack.push(30);
    stack.push(20);
    stack.push(20);
    stack.push(10);

    stack.quickSort();

    const sortedElements: any = [];
    while (!stack.isEmpty()) {
      sortedElements.push(stack.pop());
    }

    expect(sortedElements).toEqual([10, 20, 20, 30]);
  });
});
