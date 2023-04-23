const addNumbers = (a, b) => a + b;

describe('addNumbers', () => {
  test('should add two positive numbers correctly', () => {
    const result = addNumbers(2, 3);
    expect(result).toEqual(5);
  });

  test('should add a positive and negative number correctly', () => {
    const result = addNumbers(5, -3);
    expect(result).toEqual(2);
  });

  test('should add two negative numbers correctly', () => {
    const result = addNumbers(-2, -3);
    expect(result).toEqual(-5);
  });

  test('should return NaN if one of the inputs is not a number', () => {
    const result = addNumbers('hello', 2);
    expect(result).toBeNaN();
  });

  test('should throw an error if no arguments are passed', () => {
    expect(() => addNumbers()).toThrow();
  });
  
  test('should add two decimal numbers correctly', () => {
  const result = addNumbers(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
  });
  
  test('should add an array of numbers correctly', () => {
  const numbers = [2, 3, 5, 8];
  const result = numbers.reduce(addNumbers, 0);
  expect(result).toEqual(18);
  });
});


