import React from 'react';
import PropTypes from 'prop-types';
// import styles from './panel.scss';

const Panel = ({ title, children }) => {
  return (
    <>
      {title && <h2 className="panel-title">{title}</h2>}
      {children}
    </>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
