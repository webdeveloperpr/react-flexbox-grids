import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import filterProps from 'filter-react-dom-props';

const Container = props => {
  const classNames = classnames(
    props.fluid ? 'container-fluid' : 'container',
    props.className
  );

  const Element = props.element;

  return (
    <Element
      {...filterProps(props)}
      className={classNames}
    >
      {props.children}
    </Element>
  )
};

Container.defaultProps = {
  element: 'div',
};

Container.proptypes = {
  element: PropTypes.string,
  fluid: PropTypes.bool,
};

export default Container;