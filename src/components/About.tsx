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
        <p>
          Pizza, dish of Italian origin consisting of a flattened disk of bread
          dough topped with some combination of olive oil, oregano, tomato,
          olives, mozzarella or other cheese, and many other ingredients, baked
          quickly—usually, in a commercial setting, using a wood-fired oven
          heated to a very high temperature—and served hot.
        </p>
        <p>
          Italy has many variations of pizza. The Neapolitan pizza, or
          Naples-style pizza, is made specifically with buffalo mozzarella
          (produced from the milk of Italian Mediterranean buffalo) or fior di
          latte (mozzarella produced from the milk of prized Agerolese cows) and
          with San Marzano tomatoes or pomodorino vesuviano (a variety of grape
          tomato grown in Naples). Roman pizza often omits tomatoes (an early
          16th-century import) and uses onions and olives. The Ligurian pizza
          resembles the pissaladière of Provence in France, adding anchovies to
          olives and onions. Pizza has also spread from Italy throughout much of
          the rest of the world, and, in regions outside of Italy, the toppings
          used vary with the ingredients available and the flavour profile
          preferred.
        </p>
        <p>
          The popularity of pizza in the United States began with the Italian
          community in New York City, where the Neapolitan pizza had an early
          influence. The first pizzeria appeared in New York City in 1905. After
          World War II the pizza industry boomed. Soon there was scarcely a
          hamlet without a pizzeria. Sausage, bacon, ground beef, pepperoni,
          mushrooms, and peppers are traditional toppings familiar to many
          Americans, but ingredients as varied as arugula, pancetta, and
          truffles have found their way onto pizzas there. Variations are also
          often tied to different regions in the country, Chicago’s deep-dish
          pizza and California-style pizza among them.
        </p>
      </div>
    </div>
  );
};

export default About;
