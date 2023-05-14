import React from "react";
import Image from "next/image";
import Card from "./Card";

const data = [
  {
    id: 1,
    name: "The Burger Joint",
    location: "Los Angeles, California",
    website: "www.theburgerjointla.com",
    categories: ["American", "burgers"],
    price_range: "$$",
  },
  {
    id: 2,
    name: "Pasta Palace",
    location: "Chicago, Illinois",
    website: "www.pastapalacechicago.com",
    categories: ["Italian", "pasta"],
    price_range: "$$$",
  },
  {
    id: 3,
    name: "Sushi Spot",
    location: "San Francisco, California",
    website: "www.sushispotsf.com",
    categories: ["Japanese", "sushi"],
    price_range: "$$$$",
  },
  {
    id: 4,
    name: "BBQ Barn",
    location: "Austin, Texas",
    website: "www.bbqbarnaustin.com",
    categories: ["American", "BBQ"],
    price_range: "$$",
  },
  {
    id: 5,
    name: "Pizza Palace",
    location: "New York, New York",
    website: "www.pizzapalacenyc.com",
    categories: ["Italian", "pizza"],
    price_range: "$$",
  },
  {
    id: 6,
    name: "The Crab Shack",
    location: "Miami, Florida",
    website: "www.thecrabshackmiami.com",
    categories: ["Seafood", "crab"],
    price_range: "$$$",
  },
  {
    id: 7,
    name: "Carnivore",
    location: "Dallas, Texas",
    website: "www.carnivoredallas.com",
    categories: ["Steakhouse", "grill"],
    price_range: "$$$$",
  },
  {
    id: 8,
    name: "Vegan Vibes",
    location: "Portland, Oregon",
    website: "www.veganvibesportland.com",
    categories: ["Vegan", "healthy"],
    price_range: "$$",
  },
  {
    id: 9,
    name: "Crazy Curry",
    location: "Seattle, Washington",
    website: "www.crazycurryseattle.com",
    categories: ["Indian", "curry"],
    price_range: "$$",
  },
  {
    id: 10,
    name: "Taco Time",
    location: "Denver, Colorado",
    website: "www.tacotimedenver.com",
    categories: ["Mexican", "tacos"],
    price_range: "$",
  },
];

function CardList(props) {
  return (
    <div>
      <h1>Top Restaurants </h1>
      <div className="xl:container xl:mx-auto ">
        <div className="flex flex-wrap gap-8 justify-center">
          {data.length > 0
            ? data.map(restaurant => <Card restaurant={restaurant} key={restaurant.id} />)
            : "No Restaurants"}
        </div>
      </div>
    </div>
  );
}

export default CardList;
