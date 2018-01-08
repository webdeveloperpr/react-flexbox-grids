import {
  uppercase,
  toKebabLowerCased,
  createRowClassNames,
} from './utils';

describe('uppercase', () => {
  test('should uppercase the first letter', () => {
    const result = uppercase('hi');
    expect(result).toBe('Hi');
  });
});

describe('kebabLowerCased', () => {
  test('should convert uppercased words to kebab lowercased', () => {
    const result = toKebabLowerCased('offsetSm');
    expect(result).toBe('offset-sm');
  });
});

describe('createRowClassNames', () => {
  test('should create row classnames', () => {
    const props = {
      invalidProp: true,
      startSm: true,
      reverse: false,
    };

    const result = createRowClassNames(props);
    expect(result).toEqual({
      'start-sm': true,
    });
  });
});