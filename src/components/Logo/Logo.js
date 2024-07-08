import React from 'react';
import PropTypes from 'prop-types';
// import './_logo.scss';

const Logo = ({ text }) => (
  <a className="logo" href="#">
    {text}
  </a>
);

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
