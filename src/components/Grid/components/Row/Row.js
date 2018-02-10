import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import filterProps from 'filter-react-dom-props';
import { rowPropTypes } from './utils';
import { createRowClassNames } from './utils';

const Row = props => {
  const classNames = classnames('row', createRowClassNames(props), props.className);
  const Element = props.element;
  return (
    <Element {...filterProps(props)} className={classNames}>
      {props.children}
    </Element>
  )
};

Row.defaultProps = {
  element: 'div',
};

Row.proptypes = {
  element: PropTypes.string,
  ...rowPropTypes.reduce(prop => ({ [prop]: PropTypes.number })),
};

export default Row;