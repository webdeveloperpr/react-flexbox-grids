import {
  oneToTwelveRegex,
  zeroToTwelveRegex,
  zeroToElevenRegex
} from '../../utils/regex';
import { sizes, offsets } from '../../utils/constants';

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
    return zeroToElevenRegex.test(props[val])
      ? acc.concat(createOffsetClassName(val, props[val]))
      : acc
  }, []);
};

export const createClassNames = props => [
  createColClassNames,
  createOffsetClassNames,
].reduce((acc, fn) => [...acc, ...fn(props)], []);
