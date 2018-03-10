import { uppercaseRegex } from '../../utils/regex';
import { sizes, rowProperties } from '../../utils/constants';

const nonUppercasedProps = [
  'reverse',
];

export const uppercase = x => x
  .charAt(0)
  .toUpperCase() + x.slice(1);

export const rowPropTypes = sizes
  .reduce((acc, size) => [...acc, ...rowProperties.map(
    prop => size + uppercase(prop))], [])
  .concat(nonUppercasedProps);

export const toKebab = x => x
  .replace(uppercaseRegex, match => `-${match}`)
  .toLowerCase();

export const createRowClassName = prop => {
  return toKebab(prop)
    .split('-')
    .reverse()
    .join('-');
};

export const createRowClassNames = props => {
  return Object
    .keys(props)
    .concat(nonUppercasedProps)
    .reduce((acc, propName) => !!rowPropTypes.find(
      x => x === propName && props[propName] === true)
      ? { ...acc, ...{ [createRowClassName(propName)]: true } }
      : acc,
      {});
};
