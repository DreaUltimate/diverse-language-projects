const addNumbers = (a, b) => a + b;

describe('addNumbers', () => {
  it('should add two positive numbers correctly', () => {
    const result = addNumbers(2, 3);
    expect(result).toBe(5);
  });

  it('should add a positive and negative number correctly', () => {
    const result = addNumbers(5, -3);
    expect(result).toBe(2);
  });

  it('should add two negative numbers correctly', () => {
    const result = addNumbers(-2, -3);
    expect(result).toBe(-5);
  });

  it('should return NaN if one of the inputs is not a number', () => {
    const result = addNumbers('hello', 2);
    expect(result).toBeNaN();
  });

  it('should throw an error if no arguments are passed', () => {
    expect(() => addNumbers()).toThrow();
  });
});


