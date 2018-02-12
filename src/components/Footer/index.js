import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import Menu from '../common/Menu.js';
import MenuLink from '../common/MenuLink.js';
//import Copyright from './Copyright.js';
//<Copyright/>
 
class Footer extends Component {
  render() {
    return (
    <div className="footer">
      <div className="footer--copyright">
        <span className="copyright">&copy;2018 Artur Bondarenko, Eleken Inc.</span>
      </div>    
      <Menu menuClass="footer--menu">
          {this.props.links.map((link, i) => (
            <MenuLink key={i} text={link.text} link={link.to} liClass="footer--menu__li" classOnActive="footer--menu__li--active"/>
          ))}
      </Menu>
    </div>
    );
  }
}


Footer.defaultProps = {
  links: []
};

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, to: PropTypes.string.isRequired})).isRequired
};

export default Footer;