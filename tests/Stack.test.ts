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
});
