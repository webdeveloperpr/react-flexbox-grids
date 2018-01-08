import {
  createColClassName,
  createOffsetClassName,
  createColClassNames,
  createOffsetClassNames,
  createClassNames,
  createOrderClassName,
  createOrderClassNames,
} from './utils';

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
      "col-xs-3",
      "col-sm-10",
      "col-md-4",
      "col-lg-10"
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

describe('createClassNames', () => {
  test('should create offset and column classnames', () => {
    const props = {
      xsOffset: 6,
      xs: 10,
    };
    const result = createClassNames(props);
    expect(result).toEqual([
      'col-xs-10',
      'col-xs-offset-6',
    ])
  });
});

describe('createOrderClassName', () => {
  test('should create a classname', () => {
    const result = createOrderClassNames({
      firstXs: true,
      lastXs: false,
    });

    expect(result).toEqual(['first-xs']);
  });
});