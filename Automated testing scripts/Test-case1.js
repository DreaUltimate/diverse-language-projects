function addNumbers(a, b) {
  return a + b;
}

describe('addNumbers', () => {
  it('adds two positive numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  it('adds a positive and negative number correctly', () => {
    expect(addNumbers(5, -3)).toBe(2);
  });

  it('adds two negative numbers correctly', () => {
    expect(addNumbers(-2, -3)).toBe(-5);
  });

  it('returns NaN if one of the inputs is not a number', () => {
    expect(addNumbers('hello', 2)).toBe(NaN);
  });
});
