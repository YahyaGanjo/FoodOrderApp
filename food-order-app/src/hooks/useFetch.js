import { useState, useEffect } from "react";

const useFetch = (query) => {
  const [fetchedMeals, setFetchedMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      if (query === null) {
        return;
      }
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeNutrition=true&number=5&apiKey=1c2892fae70f42eb81a47d2df5b3adfd`
      );
      const data = await response.json();
      setFetchedMeals(data.results);
      console.log("called");
    };
    fetchMeals();
  }, [query]);
  return fetchedMeals;
};

export default useFetch;
