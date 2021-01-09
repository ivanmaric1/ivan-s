import React, { useState } from 'react';
import pizzaCut from '../img/cut.png';
import MenuItem from './MenuItem';
import './PizzaMenu.scss';

const PizzaMenu = () => {
  const [menu, setMenu] = useState('pizza');
  const renderMenu = () => {
    switch (menu) {
      case 'pizza':
        const pizzaForReturn: any = [];
        pizza.map((item: any) =>
          pizzaForReturn.push(
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )
        );
        return pizzaForReturn;
      case 'slice':
        const sliceForReturn: any = [];
        slice.map((item: any) =>
          sliceForReturn.push(
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )
        );
        return sliceForReturn;
      case 'rolls':
        const rollsForReturn: any = [];
        rolls.map((item: any) =>
          rollsForReturn.push(
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )
        );
        return rollsForReturn;
      case 'box':
        const boxForReturn: any = [];
        box.map((item: any) =>
          boxForReturn.push(
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )
        );
        return boxForReturn;
      case 'topings':
        const topingsForReturn: any = [];
        topings.map((item: any) =>
          topingsForReturn.push(
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )
        );
        return topingsForReturn;
    }
  };
  return (
    <div className="PizzaMenu">
      <div className="PizzaMenu-headline">
        <img src={pizzaCut} alt="" />
        <p>MENU</p>
      </div>
      <div className="PizzaMenu-content" data-simplebar>
        <div className="PizzaMenu-content-menu" data-simplebar>
          <ul>
            <li onClick={() => setMenu('pizza')}>PIZZA</li>
            <li onClick={() => setMenu('slice')}>PIZZA SLICE</li>
            <li onClick={() => setMenu('rolls')}>PIZZA ROLLS</li>
            <li onClick={() => setMenu('box')}>BOX</li>
            <li onClick={() => setMenu('topings')}>TOPINGS</li>
          </ul>
        </div>
        <div className="PizzaMenu-content-items">{renderMenu()}</div>
      </div>
    </div>
  );
};

export default PizzaMenu;

const pizza = [
  {
    name: 'Hawaii',
    description: 'Pineapple, mushrooms, black olives, tomato sauce',
    price: '$5.50',
  },
  {
    name: 'Freshness',
    description:
      'Fresh tomatoes, garlic, red onion, cheese, minced meat, dandelion, olives',
    price: '$8.40',
  },
  {
    name: 'From sea',
    description:
      'Olive, meta, squid, shrimps, fresh mushrooms, fresh red tomatoes, cheese',
    price: '$6.40',
  },
  {
    name: 'Calzone',
    description:
      'Cup fresh ricotta, parmesan, chopped basil, pepper, tomato sauce, fresh mozzarella',
    price: '$7.10',
  },
  {
    name: 'Classic',
    description:
      'Pepperoni, cheese, black olives, tomatoe sauce, mushrooms, meat, onion, salad',
    price: '$6.10',
  },
  {
    name: 'Neapolitan',
    description:
      'Tomato, oregano, garlic, extra virgin olive oil, pepperoni, cheese, red onion, sauce, mushrooms',
    price: '$6.20',
  },
  {
    name: 'Farmer',
    description:
      'Fresh mushrooms, fresh green bell peppers, tomatoes, black olives, meat, sausages',
    price: '$7.40',
  },
  {
    name: 'Mexican',
    description:
      'Refried beans, red enchilada sauce, blend cheese, nacho, corn, onion, salsa, chorizo',
    price: '$6.50',
  },
  {
    name: 'Margherita',
    description:
      'Pepperoni, cheese, black olives, tomatoe sause, mushrooms, onion',
    price: '$6.90',
  },
];

const slice = [
  {
    name: 'From sea',
    description:
      'Olive, meta, squid, shrimps, fresh mushrooms, fresh red tomatoes, cheese',
    price: '$6.40',
  },
  {
    name: 'Freshness',
    description:
      'Fresh tomatoes, garlic, red onion, cheese, minced meat, dandelion, olives',
    price: '$8.40',
  },
  {
    name: 'Hawaii',
    description: 'Pineapple, mushrooms, black olives, tomato sauce',
    price: '$5.50',
  },
  {
    name: 'Calzone',
    description:
      'Cup fresh ricotta, parmesan, chopped basil, pepper, tomato sauce, fresh mozzarella',
    price: '$7.10',
  },
];

const rolls = [
  {
    name: 'TUNA, CHEESE, ONION, CORN',
    description: 'Big portion 6 pieces',
    price: '$2.80',
  },
  {
    name: 'Salami, cheese',
    description: 'Big portion 6 pieces',
    price: '$2.00',
  },
  {
    name: 'Salami, cheese',
    description: 'Small portion 3 pieces',
    price: '$1.60',
  },
  {
    name: 'Cheese, ham',
    description: 'Big portion 6 pieces',
    price: '$1.60',
  },
  {
    name: 'Cheese, ham',
    description: 'Small portion 3 pieces',
    price: '$1.20',
  },
];

const box = [
  {
    name: 'Slice',
    description: 'Box for slice pizza size',
    price: '$0.20',
  },
  {
    name: 'Topings',
    description: 'Box for all topings',
    price: '$0.10',
  },
  {
    name: 'Family',
    description: 'Box for family pizza size',
    price: '$0.50',
  },
  {
    name: 'Normal',
    description: 'Box for normal pizza size',
    price: '$0.30',
  },
];

const topings = [
  {
    name: 'Vegies',
    description: 'Rucola, corn, parsley, beans, tomatoes, peppers',
    price: '$0.60',
  },
  {
    name: 'Sauce',
    description: 'Chilli, joghurt, italian, pelati',
    price: '$0.30',
  },
  {
    name: 'Cheese',
    description: 'Nacho, cheddar, monterey, brick',
    price: '$0.50',
  },
];
