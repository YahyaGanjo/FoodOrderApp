import { useState, useEffect } from "react";

const useFetch = (query) => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      if (query === null) {
        return;
      }
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeNutrition=true&number=15&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      const data = await response.json();
      if (data.status === "failure") {
        setError(data.message);
        console.log(data);
        return;
      }

      setMeals(data.results);
    };
    fetchMeals();
  }, [query]);
  return { meals, error };
};

export default useFetch;
