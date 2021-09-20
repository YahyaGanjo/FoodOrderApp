import MealItem from "../components/MealItem";
import useFetch from "../hooks/useFetch";
import React, { useState } from "react";
import NotFound from "./NotFound";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [sortFood, setSortFood] = useState(null);
  const fetchedMeals = useFetch(sortFood);
  const meals = fetchedMeals.meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.title}
      image={meal.image}
      price={(meal.pricePerServing / 100) * meal.servings}
    />
  ));

  return (
    <React.Fragment>
      <section className={classes.orderPageContainer}>
        <div className={classes.foodSorts}>
          <h3>Sorts</h3>
          <form>
            <input
              name="sort"
              type="radio"
              value="pasta"
              id="pasta"
              onClick={() => setSortFood("Pasta")}
            ></input>
            <label htmlFor="pasta">Pasta</label>
            <input
              name="sort"
              type="radio"
              value="seafood"
              id="seafood"
              onClick={() => setSortFood("Seafood")}
            ></input>
            <label htmlFor="seafood">Sea Food</label>
            <input
              name="sort"
              type="radio"
              value="hamburger"
              id="hamburger"
              onClick={() => setSortFood("Hamburger")}
            ></input>
            <label htmlFor="hamburger">Hamburger</label>
            <input
              name="sort"
              type="radio"
              value="thai"
              id="thai"
              onClick={() => setSortFood("Thai")}
            ></input>
            <label htmlFor="thai">Thai</label>
            <input
              name="sort"
              type="radio"
              value="indian"
              id="indian"
              onClick={() => setSortFood("Indian")}
            ></input>
            <label htmlFor="indian">Indian</label>
            <input
              name="sort"
              type="radio"
              value="dessert"
              id="dessert"
              onClick={() => setSortFood("Dessert")}
            ></input>
            <label htmlFor="dessert">Dessert</label>
            <input
              name="sort"
              type="radio"
              value="cocktail"
              id="cocktail"
              onClick={() => setSortFood("Cocktail")}
            ></input>
            <label htmlFor="cocktail">Cocktails</label>
          </form>
        </div>

        <div className={classes.meals}>
          {fetchedMeals.error && <NotFound />}
          <React.Fragment>
            <h2>{sortFood === null ? "Popular Meals" : sortFood}</h2>
            <ul>{meals}</ul>
          </React.Fragment>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AvailableMeals;
