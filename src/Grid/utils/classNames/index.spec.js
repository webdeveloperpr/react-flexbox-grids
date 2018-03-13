import {
  utilityPropToClassName,
  createColClassName,
  createOffsetClassName,
  createColClassNames,
  createOffsetClassNames,
  generateColClassNames,
  uppercase,
} from './';

import { utilityMap } from '../constants';

describe('utilityPropToClassName()', () => {
  describe('should convert props to classnames', () => {
    Object
      .keys(utilityMap)
      .forEach(key => {
        test(`should convert ${key} prop to a className`, () => {
          const classNames = utilityPropToClassName({ [key]: true });
          expect(classNames).toEqual([utilityMap[key]]);
        });
      });
  });

  describe('should not convert props to classnames', () => {
    Object
      .keys(utilityMap)
      .forEach(key => {
        test(`should convert ${key} prop to a className`, () => {
          const classNames = utilityPropToClassName({ [key]: false });
          expect(classNames).toEqual([]);
        });
      });
  });

  describe('Converts multiple props to classNames', () => {
    test('should convert xsOffset and xsStart props to classNames', () => {
      expect(utilityPropToClassName({
        xsFirst: true,
        xsStart: true
      })).toEqual(['first-xs', 'start-xs']);
    });
  });

  describe('createColClassName', () => {
    test('should create column classnames', () => {
      const result = createColClassName('xs', 4);
      expect(result).toBe('col-xs-4');
    });
  });

  describe('createColClassNames', () => {
    test('should create column classnames', () => {
      const props = { xs: 3, sm: 10, md: 4, lg: 10 };
      const result = createColClassNames(props);
      expect(result).toEqual([
        'col-xs-3',
        'col-sm-10',
        'col-md-4',
        'col-lg-10'
      ]);
    });
  });

  describe('createOffsetClassNames', () => {
    test('should create offset classnames', () => {
      const props = {
        xsOffset: 4,
        smOffset: 5,
        mdOffset: 6,
        lgOffset: 7,
      };
      const result = createOffsetClassNames(props);
      expect(result).toEqual([
        'col-xs-offset-4',
        'col-sm-offset-5',
        'col-md-offset-6',
        'col-lg-offset-7',
      ])
    });
  });

  describe('generateColClassNames', () => {
    test('should create offset and column classnames', () => {
      const props = {
        xsOffset: 6,
        xs: 10,
      };
      const result = generateColClassNames(props);
      expect(result).toEqual([
        'col-xs-10',
        'col-xs-offset-6',
      ])
    });
  });

  describe('uppercase', () => {
    test('should uppercase the first letter', () => {
      const result = uppercase('hi');
      expect(result).toBe('Hi');
    });
  });
});
