import { oneToTwelveRegex } from '../regex';

const rangeError = (
  props,
  propName,
  componentName
) => `${propName} prop supplied to ${componentName} must have value between 0-12`;

const numberError = (
  props,
  propName,
  componentName
) => `${propName} prop supplied to ${componentName} must be a number`;

export const columnPropType = (props, propName, componentName) => {
  const val = props[propName];

  if (val === true) {
    return null;
  }

  if (!val && val !== 0) {
    return null
  }

  if (isNaN(val)) {
    return new Error(numberError(props, propName, componentName));
  }

  if (!oneToTwelveRegex.test(props[propName])) {
    return new Error(rangeError(props, propName, componentName));
  }
};
