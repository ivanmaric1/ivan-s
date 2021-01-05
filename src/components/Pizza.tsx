import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PizzaMenu from './PizzaMenu';
import PizzaSort from './PizzaSort';
import './Pizza.scss';

const Pizza = () => {
  return (
    <div className="Pizza">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={PizzaMenu} />
        <Route path="/pizzas" component={PizzaSort} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Pizza;
