import MealItem from "../components/MealItem";
import useFetch from "../hooks/useFetch";
import React, { useState } from "react";

const AvailableMeals = () => {
  const [sortFood, setSortFood] = useState(null);
  /*const [fetchedMeals, setFetchedMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?query=indian&addRecipeNutrition=true&number=5&apiKey=1c2892fae70f42eb81a47d2df5b3adfd"
      );
      const data = await response.json();
      setFetchedMeals(data.results);
      console.log(data.results);
    };
    fetchMeals();
  }, []);*/

  const fetchedMeals = useFetch(sortFood);
  const meals = fetchedMeals.map((meal) => (
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
      <button onClick={() => setSortFood("indian")}>Indian</button>
      <button onClick={() => setSortFood("funghi")}>pizza</button>
      <button onClick={() => setSortFood("pasta")}>pasta</button>
      <button onClick={() => setSortFood("sushi")}>sushi</button>
      <button onClick={() => setSortFood("hamburger")}>hamburger</button>
      <button onClick={() => setSortFood("thai")}>thai</button>
      <ul>{meals}</ul>
    </section>
  );
};

export default React.memo(AvailableMeals);
