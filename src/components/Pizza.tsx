import React from 'react';
import Menu from './Menu';
import Content from './Content';
import './Pizza.scss';

const Pizza = () => {
  return (
    <div className="Pizza">
      <Menu />
      <Content />
    </div>
  );
};

export default Pizza;
