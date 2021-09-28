import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AvailableMeals from "./pages/AvailableMeals";
import NotFound from "./pages/NotFound";
import Construction from "./pages/Construction";
import Auth from "./pages/Auth";

function App() {
  return (
    <Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/order">
          <AvailableMeals />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/construction">
          <Construction />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Header>
  );
}

export default App;
