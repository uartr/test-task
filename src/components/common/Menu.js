import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {

  return (
    <ul className={`${props.menuClass}`}>{props.children}</ul>
  );
}

Menu.defaultProps = {
  menuClass: '',
  menuStyle: {},
  borders: false
}

Menu.propTypes = {
  menuClass: PropTypes.string,
  menuStyle: PropTypes.object,
  borders: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node
  ])
}

export default Menu;