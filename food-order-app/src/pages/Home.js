import React from "react";
import BackDrop from "../components/BackDrop";

const Home = () => {
  return (
    <React.Fragment>
      <BackDrop />
      <section>
        <h1 style={{ fontSize: "2.5rem" }}>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </React.Fragment>
  );
};

export default React.memo(Home);
