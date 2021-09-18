import MealItem from "../components/MealItem";
import useFetch from "../hooks/useFetch";
import React, { useState } from "react";

const AvailableMeals = () => {
  const [sortFood, setSortFood] = useState(null);
  const fetchedMeals = useFetch(sortFood);
  const meals = fetchedMeals.meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.title}
      image={meal.image}
      ingredients={meal.nutrition.ingredients}
      price={(meal.pricePerServing / 100) * meal.servings}
    />
  ));

  return (
    <section>
      <button onClick={() => setSortFood("pasta")}>Pasta</button>
      <button onClick={() => setSortFood("seafood")}>Seafood</button>
      <button onClick={() => setSortFood("hamburger")}>Hamburger</button>
      <button onClick={() => setSortFood("thai")}>Thai</button>
      <button onClick={() => setSortFood("indian")}>Indian</button>
      <button onClick={() => setSortFood("dessert")}>Dessert</button>
      <button onClick={() => setSortFood("alcohol")}>Alcohol</button>
      <div>{fetchedMeals.error && fetchedMeals.error}</div>
      <div>{fetchedMeals.meals.length > 0 && <ul>{meals}</ul>}</div>
    </section>
  );
};

export default AvailableMeals;
