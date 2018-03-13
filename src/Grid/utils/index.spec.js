import { utilityPropToClassName, utilityMap } from './';

describe.only('utilityPropToClassName()', () => {
  describe('should convert props to classnames', () => {
    Object
      .keys(utilityMap)
      .forEach(key => {
        test(`should convert ${key} prop to a className`, () => {
          const classNames = utilityPropToClassName({ [key]: true });
          expect(classNames).toEqual(utilityMap[key]);
        });
      });
  });

  describe('should not convert props to classnames', () => {
    Object
      .keys(utilityMap)
      .forEach(key => {
        test(`should convert ${key} prop to a className`, () => {
          const classNames = utilityPropToClassName({ [key]: false });
          expect(classNames).toEqual('');
        });
      });
  });

  describe('Converts multiple props to classNames', () => {
    test('should convert xsOffset and xsStart props to classNames', () => {
      expect(utilityPropToClassName({ xsFirst: true, xsStart: true })).toEqual('first-xs start-xs');
    });
  });
});
