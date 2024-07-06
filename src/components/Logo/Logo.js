import React from "react";
import PropTypes from "prop-types";

const Logo = ({ text }) => <a href="#">{text}</a>;

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
