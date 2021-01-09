import React from 'react';
import './MenuItem.scss';

interface Props {
  name: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<Props> = ({ name, description, price }) => {
  return (
    <div className="MenuItem">
      <div className="MenuItem-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="MenuItem-price">
        <h1>{price}</h1>
      </div>
    </div>
  );
};

export default MenuItem;
