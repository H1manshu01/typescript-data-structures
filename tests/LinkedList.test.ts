import { LinkedList } from '../src/LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  test('initializes an empty list', () => {
    expect(list.toArray()).toEqual([]);
  });

  test('appends elements to the list', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('prepends elements to the list', () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test('removes elements from the list', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.remove(2);
    expect(list.toArray()).toEqual([1, 3]);
  });

  test('finds an existing element', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const node = list.find(2);
    expect(node?.value).toBe(2);
  });

  test('returns null when finding a non-existent element', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const node = list.find(4);
    expect(node).toBeNull();
  });
});
