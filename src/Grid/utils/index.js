export const utilityMap = {
  first: 'first',
  last: 'last',
  reverse: 'reverse',
  xsStart: 'start-xs',
  xsCenter: 'center-xs',
  xsEnd: 'end-xs',
  xsTop: 'top-xs',
  xsMiddle: 'middle-xs',
  xsBottom: 'bottom-xs',
  xsAround: 'around-xs',
  xsBetween: 'between-xs',
  xsFirst: 'first-xs',
  xsLast: 'last-xs',
  smStart: 'start-sm',
  smCenter: 'center-sm',
  smEnd: 'end-sm',
  smTop: 'top-sm',
  smMiddle: 'middle-sm',
  smBottom: 'bottom-sm',
  smAround: 'around-sm',
  smBetween: 'between-sm',
  smFirst: 'first-sm',
  smLast: 'last-sm',
  mdStart: 'start-md',
  mdCenter: 'center-md',
  mdEnd: 'end-md',
  mdTop: 'top-md',
  mdMiddle: 'middle-md',
  mdBottom: 'bottom-md',
  mdAround: 'around-md',
  mdBetween: 'between-md',
  mdFirst: 'first-md',
  mdLast: 'last-md',
  lgStart: 'start-lg',
  lgCenter: 'center-lg',
  lgEnd: 'end-lg',
  lgTop: 'top-lg',
  lgMiddle: 'middle-lg',
  lgBottom: 'bottom-lg',
  lgAround: 'around-lg',
  lgBetween: 'between-lg',
  lgFirst: 'first-lg',
  lgLast: 'last-lg',
};

export const utilityPropToClassName = (props = {}) => {
  return Object
    .keys(props)
    .reduce((acc, val) => {
      const className = utilityMap[val];
      const propIsTrue = className && props[val] === true;
      return propIsTrue ? [...acc, className] : acc;
    }, []).join(' ');
};
