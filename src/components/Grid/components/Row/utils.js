import { uppercaseRegex } from '../../utils/regex';
import { sizes, rowProperties } from '../../utils/constants';

const nonUppercasedProps = [
  'reverse',
];

export const uppercase = x => x
  .charAt(0)
  .toUpperCase() + x.slice(1);

export const rowPropTypes = sizes
  .reduce((acc, x) => [...acc, ...rowProperties.map(y => y + uppercase(x))], [])
  .concat(nonUppercasedProps);

export const toKebabLowerCased = x => x
  .replace(uppercaseRegex, match => `-${match}`)
  .toLowerCase();

export const createRowClassNames = props => {
  return Object
    .keys(props)
    .concat(nonUppercasedProps)
    .reduce((acc, propName) => !!rowPropTypes.find(
      x => x === propName && props[propName] === true)
      ? { ...acc, ...{ [toKebabLowerCased(propName)]: true } }
      : acc,
      {});
};
