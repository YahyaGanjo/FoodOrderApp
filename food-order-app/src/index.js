import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartProvider from "./store/CartProvider";
import AuthProvider from "./store/AuthProvider";

ReactDOM.render(
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>,
  document.getElementById("root")
);
