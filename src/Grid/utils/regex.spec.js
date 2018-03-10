import {
  oneToTwelveRegex,
  zeroToTwelveRegex,
  uppercaseRegex
} from './regex';

describe('oneToTwelveRegex', () => {
  test('should return true on numbers 1-12', () => {
    let i = 1;
    for (i; i <= 12; i++) {
      const result = oneToTwelveRegex.test(i);
      expect(result).toBe(true);
    }
  });
  test('should return false on number 13', () => {
    const result = oneToTwelveRegex.test(13);
    expect(result).toBe(false);
  });
  test('should return false on number 0', () => {
    const result = oneToTwelveRegex.test(0);
    expect(result).toBe(false);
  });
});

describe('zeroToTwelveRegex', () => {
  test('should return true on numbers 0-12', () => {
    let i = 0;
    for (i; i <= 12; i++) {
      const result = zeroToTwelveRegex.test(i);
      expect(result).toBe(true);
    }
  });
  test('should return false on number 13', () => {
    const result = zeroToTwelveRegex.test(13);
    expect(result).toBe(false);
  });
  test('should return false on number 0', () => {
    const result = zeroToTwelveRegex.test(-1);
    expect(result).toBe(false);
  });
});

describe('uppercaseRegex', () => {
  test('should return true when uppercased', () => {
    const result = uppercaseRegex.test('Uppercased');
    expect(result).toBe(true);
  
  });
  test('should return true when uppercased', () => {
    const result = uppercaseRegex.test('lowercased');
    expect(result).toBe(false);
  });
});