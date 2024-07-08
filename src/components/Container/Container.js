import React from 'react';
import './_container.scss';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
