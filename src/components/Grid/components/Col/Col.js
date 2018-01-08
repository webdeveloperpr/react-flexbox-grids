import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import filterProps from 'filter-react-dom-props';
import { columnPropType } from '../../propTypes/index';
import { createClassNames } from './utils';

const Col = props => {
  const columnClassNames = createClassNames(props);
  const otherClassNames = {
    reverse: props.reverse
  };
  const classNames = classnames(columnClassNames, otherClassNames, props.className);

  return (
    <div{...filterProps(props)} className={classNames}>
      {props.children}
    </div>
  )
};

Col.propTypes = {
  first: PropTypes.bool,
  last: PropTypes.bool,
  xs: columnPropType,
  sm: columnPropType,
  md: columnPropType,
  lg: columnPropType,
  reverse: PropTypes.bool,
  xsOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
};

export default Col;