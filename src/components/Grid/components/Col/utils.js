import { oneToTwelveRegex, zeroToTwelveRegex } from '../../utils/regex';
import { sizes, offsets, order } from '../../utils/constants';
import { toKebab, uppercase } from '../Row/utils';

export const createColClassName = (mediaSize, colSize) => `col-${mediaSize}-${colSize}`;

const createOffsetClassName = (offsetSize, colSize) => {
  return `col-${offsetSize.substr(0, 2)}-offset-${colSize}`;
};

export const createColClassNames = props => {
  return sizes.reduce((acc, val) => {
    if (oneToTwelveRegex.test(props[val])) {
      return acc.concat(createColClassName(val, props[val]))
    }

    return props[val] === true ? acc.concat(`col-${val}`) : acc;
  }, []);
};

export const createOffsetClassNames = props => {
  return offsets.reduce((acc, val) => {
    return zeroToTwelveRegex.test(props[val])
      ? acc.concat(createOffsetClassName(val, props[val]))
      : acc
  }, []);
};

export const createOrderClassName = (prop, colSize) => `${prop}-${colSize}`;

const orderPropWithSizes = sizes.reduce((acc, size) => [...acc, ...order.map(
  order => order + uppercase(size))], []);

export const createOrderClassNames = props => {
  return Object
    .keys(props)
    .reduce((acc, val) => {
      return !!orderPropWithSizes.find(x => x === val && props[x] === true)
        ? [...acc, toKebab(val)]
        : acc
    }, []);
};

export const createClassNames = props => [
  createColClassNames,
  createOffsetClassNames,
  createOrderClassNames,
].reduce((acc, fn) => [...acc, ...fn(props)], []);
