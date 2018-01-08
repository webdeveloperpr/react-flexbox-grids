import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import filterProps from 'filter-react-dom-props';
import { rowPropTypes } from './utils';
import { createRowClassNames } from './utils';

const Row = props => {
  const classNames = classnames('row', createRowClassNames(props), props.className);

  return (
    <div {...filterProps(props)} className={classNames}>
      {props.children}
    </div>
  )
};

Row.proptypes = {
  ...rowPropTypes.reduce(prop => ({ [prop]: PropTypes.number })),
};

export default Row;