import { columnPropType } from './index';
import { sizes, maxCols } from '../utils/constants';

const componentName = 'Col';

const validSizes = size => {
  const colSizes = [];
  for (let i = 1; i < maxCols; i++) {
    colSizes.push({ [size]: i });
  }
  return colSizes;
};

const invalidString = size => {
  const colSizes = [];
  for (let i = 0; i < maxCols; i++) {
    colSizes.push({ [size]: 's' });
  }
  return colSizes;
};

describe('Sizes', () => {
  sizes.forEach(size => {
    describe(size, () => {
      test('should return undefined on numbers 1-12', () => {
        validSizes(size).forEach(props => {
          const result = columnPropType(props, size, componentName);
          expect(result).toBe(undefined);
        })
      });

      test('should return Error on numbers higher than 12', () => {
        const result = columnPropType({ [size]: 13 }, size, componentName);
        expect(result instanceof Error).toBe(true);
      });
    });
  });
});

describe('Invalid String', () => {
  sizes.forEach(size => {
    describe(size, () => {
      test('should return Errors', () => {
        invalidString(size).forEach(props => {
          const result = columnPropType(props, size, componentName);
          expect(result instanceof Error).toBe(true);
        })
      });
    });
  });
});

