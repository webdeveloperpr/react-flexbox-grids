import { sizes, offsets, utilityMap } from '../constants';
import { oneToTwelveRegex, oneToElevenRegex } from '../regex';

export const createColClassName = (mediaSize, colSize) => `col-${mediaSize}-${colSize}`;

const createOffsetClassName = (offsetSize, colSize) => {
  return `col-${offsetSize.substr(0, 2)}-offset-${colSize}`;
};

/**
 * Creates all of the columns classnames
 * @param props
 */
export const createColClassNames = props => {
  return sizes.reduce((acc, val) => {
    if (oneToTwelveRegex.test(props[val])) {
      return acc.concat(createColClassName(val, props[val]))
    }

    return props[val] === true ? acc.concat(`col-${val}`) : acc;
  }, []);
};

/**
 * Creates all of the offset classnames for the column
 * @param props
 */
export const createOffsetClassNames = props => {
  return offsets.reduce((acc, val) => {
    return oneToElevenRegex.test(props[val])
      ? acc.concat(createOffsetClassName(val, props[val]))
      : acc
  }, []);
};

/**
 * Creates the utility classnames used by the Col and Row components.
 * @param props
 * @returns {string}
 */
export const utilityPropToClassName = (props = {}) => {
  return Object
    .keys(props)
    .reduce((acc, val) => {
      const className = utilityMap[val];
      const propIsTrue = className && props[val] === true;
      return propIsTrue ? [...acc, className] : acc;
    }, []);
};

/**
 * This class generates all of the relevant classnames for a Col component.
 * @param props
 * @returns {*}
 */
export const generateColClassNames = props => [
  createColClassNames,
  createOffsetClassNames,
  utilityPropToClassName,
].reduce((acc, fn) => [...acc, ...fn(props)], []);

export const uppercase = x => x
  .charAt(0)
  .toUpperCase() + x.slice(1);
