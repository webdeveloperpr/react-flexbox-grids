import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import filterProps from 'filter-react-dom-props';

const Container = props => {
  const classNames = classnames(
    'container',
    { fluid: props.fluid },
    props.className
  );

  return (
    <div
      {...filterProps(props)}
      className={classNames}
    >
      {props.children}
    </div>
  )
};

Container.proptypes = {
  fluid: PropTypes.bool,
};

export default Container;