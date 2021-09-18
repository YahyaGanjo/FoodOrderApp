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
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeNutrition=true&number=5&apiKey=1c2892fae70f42eb81a47d2df5b3adfd`
      );
      const data = await response.json();
      if (data.status === "failure") {
        setError(data.message);
        console.log(data);
        return;
      }

      setMeals(data.results);
      console.log("API is called");
    };
    fetchMeals();
  }, [query]);
  return { meals, error };
};

export default useFetch;
