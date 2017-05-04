import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar from './UserAvatar'

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header__menu">
        <img src="assets/img/menu@2x.png" className="header__menu--icon" alt="Menu" />
      </div>
      <p className="header__title">{ title }</p>
      <div className="header__user">
        <UserAvatar />
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string
};
Header.defaultProps = {};

export default Header;
