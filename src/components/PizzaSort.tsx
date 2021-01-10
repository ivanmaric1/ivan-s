import React from 'react';
import PizzaItem from './PizzaItem';
import pizzaCut from '../img/cut.png';
import './PizzaSort.scss';

const PizzaSort = () => {
  const renderContent = () => {
    const pizzaForReturn: any = [];
    pizza.map((item: any) =>
      pizzaForReturn.push(
        <PizzaItem
          name={item.name}
          description={item.description}
          price={item.price}
          img={item.img}
        />
      )
    );
    return pizzaForReturn;
  };
  return (
    <div className="PizzaSort">
      <div className="PizzaSort-headline">
        <img src={pizzaCut} alt="" />
        <p>PIZZAS</p>
      </div>
      <div className="PizzaSort-content" data-simplebar>
        {renderContent()}
      </div>
    </div>
  );
};

export default PizzaSort;

const pizza = [
  {
    name: 'Freshness',
    description:
      'Fresh tomatoes, garlic, red onion, cheese, minced meat, dandelion, olives',
    price: '$8.40',
    img: 'freshness',
  },

  {
    name: 'From sea',
    description:
      'Olive, meta, squid, shrimps, fresh mushrooms, fresh red tomatoes, cheese',
    price: '$6.40',
    img: 'sea',
  },

  {
    name: 'Calzone',
    description:
      'Cup fresh ricotta, parmesan, chopped basil, pepper, tomato sauce, fresh mozzarella',
    price: '$7.10',
    img: 'calzone',
  },
  {
    name: 'Classic',
    description:
      'Pepperoni, cheese, black olives, tomatoe sauce, mushrooms, meat, onion, salad',
    price: '$6.10',
    img: 'classic',
  },
  {
    name: 'Neapolitan',
    description:
      'Tomato, oregano, garlic, extra virgin olive oil, pepperoni, cheese, red onion, sauce, mushrooms',
    price: '$6.20',
    img: 'napolitan',
  },
  {
    name: 'Farmer',
    description:
      'Fresh mushrooms, fresh green bell peppers, tomatoes, black olives, meat, sausages',
    price: '$7.40',
    img: 'farmer',
  },
  {
    name: 'Mexican',
    description:
      'Refried beans, red enchilada sauce, blend cheese, nacho, corn, onion, salsa, chorizo',
    price: '$6.50',
    img: 'Mexican',
  },
  {
    name: 'Margherita',
    description:
      'Pepperoni, cheese, black olives, tomatoe sause, mushrooms, onion',
    price: '$6.90',
    img: 'Margherita',
  },
  {
    name: 'Hawaii',
    description: 'Pineapple, mushrooms, black olives, tomato sauce',
    price: '$5.50',
    img: 'hawaii',
  },
];
