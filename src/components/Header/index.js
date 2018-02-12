import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Avatar from 'react-avatar';


import Menu from '../common/Menu.js';
import MenuLink from '../common/MenuLink.js';
//import Profile from './Profile.js';
//<Profile />

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header--profile">
          <Avatar name={this.props.profileName} textSizeRatio="2.3" size={36} color="#2161B7" round={true}/>
          
          <span className="header--profile__name">John Snow</span>

        </div>

        <Menu menuClass="header--menu">
          {this.props.links.map((link, i) => (
            <MenuLink key={i} text={link.text} link={link.to} liClass="header--menu__li" classOnActive="header--menu__li--active"/>
          ))}
        </Menu>
        
      </div>
    );
  }
}

Header.defaultProps = {
  links: [],
  profileName: "John Snow"
};

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, to: PropTypes.string.isRequired})).isRequired
};

export default Header;