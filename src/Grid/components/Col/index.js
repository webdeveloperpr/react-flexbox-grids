import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import filterProps from 'filter-react-dom-props';
import { columnPropType } from '../../propTypes/index';
import { createClassNames } from './utils';
import { utilityPropToClassName } from '../../utils';

const Col = props => {
  const columnClassNames = createClassNames(props);
  const utilityClassNames = utilityPropToClassName(props);

  const classNames = classnames(
    columnClassNames,
    utilityClassNames,
    props.className
  );

  const Element = props.element;

  return (
    <Element {...filterProps(props)} className={classNames}>
      {props.children}
    </Element>
  )
};

Col.defaultProps = {
  element: 'div',
};

Col.propTypes = {
  element: PropTypes.string,
  xs: columnPropType,
  sm: columnPropType,
  md: columnPropType,
  lg: columnPropType,
  // offsets
  xsOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  // order
  first: PropTypes.bool,
  last: PropTypes.bool,
  reverse: PropTypes.bool,
  // xs
  xsStart: PropTypes.bool,
  xsCenter: PropTypes.bool,
  xsEnd: PropTypes.bool,
  xsTop: PropTypes.bool,
  xsMiddle: PropTypes.bool,
  xsBottom: PropTypes.bool,
  xsAround: PropTypes.bool,
  xsBetween: PropTypes.bool,
  xsFirst: PropTypes.bool,
  xsLast: PropTypes.bool,
  // sm
  smStart: PropTypes.bool,
  smCenter: PropTypes.bool,
  smEnd: PropTypes.bool,
  smTop: PropTypes.bool,
  smMiddle: PropTypes.bool,
  smBottom: PropTypes.bool,
  smAround: PropTypes.bool,
  smBetween: PropTypes.bool,
  smFirst: PropTypes.bool,
  smLast: PropTypes.bool,
  // md
  mdStart: PropTypes.bool,
  mdCenter: PropTypes.bool,
  mdEnd: PropTypes.bool,
  mdTop: PropTypes.bool,
  mdMiddle: PropTypes.bool,
  mdBottom: PropTypes.bool,
  mdAround: PropTypes.bool,
  mdBetween: PropTypes.bool,
  mdFirst: PropTypes.bool,
  mdLast: PropTypes.bool,
  // lg
  lgStart: PropTypes.bool,
  lgCenter: PropTypes.bool,
  lgEnd: PropTypes.bool,
  lgTop: PropTypes.bool,
  lgMiddle: PropTypes.bool,
  lgBottom: PropTypes.bool,
  lgAround: PropTypes.bool,
  lgBetween: PropTypes.bool,
  lgFirst: PropTypes.bool,
  lgLast: PropTypes.bool,
};

export default Col;