import React from 'react';
import './PizzaItem.scss';

interface Props {
  name: string;
  description: string;
  price: string;
  img: string;
}

const PizzaItem: React.FC<Props> = ({ name, description, price, img }) => {
  const pizza = require(`../img/${img}.png`);
  return (
    <div className="PizzaItem">
      <div>
        <img src={pizza.default} alt="" />
      </div>
      <div className="PizzaItem-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="PizzaItem-price">
        <h1>{price}</h1>
      </div>
    </div>
  );
};

export default PizzaItem;
