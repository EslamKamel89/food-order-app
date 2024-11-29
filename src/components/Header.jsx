/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import logoImg from "../assets/Logo.jpg";
import CartContext from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import Button from "./UI/Button";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumbersOfItems, item) => {
    return item.quantity + totalNumbersOfItems;
  }, 0);
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="resturant logo" />
        <h1> Feast Finder </h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
