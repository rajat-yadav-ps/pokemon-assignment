import React,  { ReactNode } from 'react';
import "./header.scss";
import PropTypes from 'prop-types';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="header">
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.any
}

export default Header;
