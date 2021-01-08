import React from 'react';
import pizzaCut from '../img/cut.png';
import './About.scss';

const About = () => {
  return (
    <div className="About">
      <div className="About-headline">
        <img src={pizzaCut} alt="" />
        <p>ABOUT</p>
      </div>

      <div className="About-content" data-simplebar>
        <p>
          Angelo and Pasquale, the two owners, after having worked for many
          years in several restaurants and pizzerias all over London, decided to
          embrak their own adventure. Being Neapolitan and obsessed about pizza,
          they thought that the borough of Ealing needed a traditional
          neapolitan pizzeria. So, after working with their own hands on
          everything and importing the wood fired oven from Italy, Santa Maria
          Pizzeria finally opened its doors to the public on Valentine’s day
          2010.
        </p>
        <p>
          The pizza served in Zagreb, is exactly the same as the pizza you can
          eat on the streets of Naples, using the same ingredients and adopting
          the same cooking method.
        </p>
        <p>
          Ivan's Pizzeria will be happy to feed everyone, from pennyless
          students to VIPs, with the authentic taste of Naples, according to the
          motto “Quality and quantity at honest prices”. In fact pizzerias are
          not a sort of second-class restaurant, but a place where everyone gets
          treated in the same way and standards should be kept as high as
          possible with the desire to improve them all the time.
        </p>
        <p>
          Being featured in the list of “Best of something”, is always nice, but
          when your name appears in the Sunday Times top CRO 100 Restaurants
          among the top players in the game, it’s an achievement that makes us
          incredibly proud.
        </p>
      </div>
    </div>
  );
};

export default About;
